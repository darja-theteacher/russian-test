const allowedPages = [
    'reading-pt-1.html',
    'reading-pt-2.html',
    'reading-pt-3.html',
    'reading-pt-4.html',
    'reading-pt-5.html',
    'listening-pt-1.html',
    'listening-pt-2.html',
    'listening-pt-3.html',
    'grammar-test.html',
];

function loadAnswers() {
    const currentPath = window.location.pathname.split('/').pop();

    if (!allowedPages.includes(currentPath)) {
        sessionStorage.removeItem('testAnswers');
        sessionStorage.removeItem('testQuotes'); 
        return;
    }

    const savedAnswers = JSON.parse(sessionStorage.getItem('testAnswers')) || {};

    for (const name in savedAnswers) {
        const element = document.querySelector(`[name="${name}"]`);
        if (element) {
            if (element.type === 'radio') {
                const radioElement = document.querySelector(`[name="${name}"][value="${savedAnswers[name]}"]`);
                if (radioElement) {
                    radioElement.checked = true;
                }
            } else if (element.tagName === 'SELECT') {
                element.value = savedAnswers[name];
            }
        }
    }
}

function saveAnswers() {
    const currentAnswers = {};
    const currentQuotes = {}; 
    
    document.querySelectorAll('input[type="radio"]:checked, select').forEach(element => {
        const questionName = element.name;
        
        currentAnswers[questionName] = element.value;
        
        const quoteId = `quote-${questionName}`;
        const quoteElement = document.getElementById(quoteId);

        if (quoteElement) {
            currentQuotes[questionName] = quoteElement.innerHTML;
        }
    });

    const allAnswers = JSON.parse(sessionStorage.getItem('testAnswers')) || {};
    const allQuotes = JSON.parse(sessionStorage.getItem('testQuotes')) || {}; 

    const updatedAnswers = { ...allAnswers, ...currentAnswers };
    const updatedQuotes = { ...allQuotes, ...currentQuotes }; 

    sessionStorage.setItem('testAnswers', JSON.stringify(updatedAnswers));
    sessionStorage.setItem('testQuotes', JSON.stringify(updatedQuotes)); 
}

function attachSaveListeners() {
    const elementsToWatch = document.querySelectorAll('input[type="radio"], select');
    
    elementsToWatch.forEach(element => {
        element.addEventListener('change', saveAnswers);
    });
}

function attachNavigationListeners() {
    const allLinks = document.querySelectorAll('a'); 

    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isTestPageLink = allowedPages.some(page => href && href.includes(page));
        const isBackButton = (link.textContent || '').toLowerCase().includes('back') || (link.className || '').toLowerCase().includes('back');
        
        if (isTestPageLink && !isBackButton) {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                
                saveAnswers(); 

                setTimeout(() => {
                    window.location.href = href;
                }, 50);
            });
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadAnswers(); 
    
    const currentPath = window.location.pathname.split('/').pop();
    if (allowedPages.includes(currentPath)) {
        attachSaveListeners(); 
        attachNavigationListeners(); 
    }
});
