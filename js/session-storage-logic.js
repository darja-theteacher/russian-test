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

// Эта функция загружает ответы из SessionStorage при загрузке страницы и заполняет форму.
function loadAnswers() {
    const currentPath = window.location.pathname.split('/').pop();

    // Если текущая страница не в "белом списке", очищаем хранилище.
    if (!allowedPages.includes(currentPath)) {
        sessionStorage.removeItem('testAnswers');
        // НОВОЕ: Очистка хранилища текстов заданий
        sessionStorage.removeItem('testQuotes'); 
        return;
    }

    // Загружаем сохраненные ответы.
    const savedAnswers = JSON.parse(sessionStorage.getItem('testAnswers')) || {};

    // Заполняем элементы формы на текущей странице.
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

// Эта функция собирает ответы с текущей страницы и сохраняет их в SessionStorage.
function saveAnswers() {
    const currentAnswers = {};
    // НОВОЕ: Объект для сбора текстов заданий с текущей страницы
    const currentQuotes = {}; 
    
    document.querySelectorAll('input[type="radio"]:checked, select').forEach(element => {
        const questionName = element.name;
        
        // 1. Сохранение ответа (исходная логика)
        currentAnswers[questionName] = element.value;
        
        // 2. НОВОЕ: Поиск и сохранение текста задания (taskQuote)
        const quoteId = `quote-${questionName}`;
        const quoteElement = document.getElementById(quoteId);

        // Если элемент задания найден (по ID), сохраняем его HTML
        if (quoteElement) {
            // Сохраняем innerHTML, чтобы вывести его в отчете.
            currentQuotes[questionName] = quoteElement.innerHTML;
        }
    });

    const allAnswers = JSON.parse(sessionStorage.getItem('testAnswers')) || {};
    // НОВОЕ: Загрузка старых текстов заданий
    const allQuotes = JSON.parse(sessionStorage.getItem('testQuotes')) || {}; 

    const updatedAnswers = { ...allAnswers, ...currentAnswers };
    // НОВОЕ: Объединение старых и новых текстов заданий
    const updatedQuotes = { ...allQuotes, ...currentQuotes }; 

    sessionStorage.setItem('testAnswers', JSON.stringify(updatedAnswers));
    // НОВОЕ: Сохранение обновленных текстов заданий в отдельный ключ
    sessionStorage.setItem('testQuotes', JSON.stringify(updatedQuotes)); 
}

// ⬇️ ФУНКЦИЯ: Привязка прослушивателей для автосохранения
function attachSaveListeners() {
    // Выбираем все элементы, которые мы сохраняем (radio и select)
    const elementsToWatch = document.querySelectorAll('input[type="radio"], select');
    
    elementsToWatch.forEach(element => {
        // Привязываем функцию saveAnswers к событию 'change'. 
        // Оно срабатывает, как только выбор в элементе меняется.
        element.addEventListener('change', saveAnswers);
    });
}

// =================================================================
// ⭐️ НОВАЯ КРИТИЧЕСКАЯ ФУНКЦИЯ: ГАРАНТИЯ СОХРАНЕНИЯ ПЕРЕД УХОДОМ
// =================================================================
function attachNavigationListeners() {
    // Выбираем ВСЕ ссылки на странице, чтобы учесть навигацию и кнопки.
    const allLinks = document.querySelectorAll('a'); 

    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 1. Проверка: Ссылка ведет на одну из страниц теста или результатов?
        // Это гарантирует, что мы не будем перехватывать внешние ссылки или ссылки на 'Back'.
        const isTestPageLink = allowedPages.some(page => href && href.includes(page));

        // 2. Исключаем ссылки "Back", чтобы не создавать путаницу в навигации назад
        // Используем более универсальную проверку, чем просто класс.
        const isBackButton = (link.textContent || '').toLowerCase().includes('back') || (link.className || '').toLowerCase().includes('back');
        
        // Если это ссылка, ведущая вперед по тесту, и это не "Назад"
        if (isTestPageLink && !isBackButton) {
            link.addEventListener('click', (event) => {
                // 1. ОСТАНАВЛИВАЕМ немедленный переход браузера
                event.preventDefault(); 
                
                // 2. ГАРАНТИРОВАННО сохраняем ответы (это предотвращает потерю последнего ответа!)
                saveAnswers(); 

                // 3. ВОЗОБНОВЛЯЕМ переход после небольшой паузы
                // Пауза гарантирует, что браузер успеет записать данные в Session Storage.
                setTimeout(() => {
                    window.location.href = href;
                }, 50); // 50 миллисекунд обычно достаточно
            });
        }
    });
}


// Привязываем функции к событиям:
document.addEventListener('DOMContentLoaded', () => {
    loadAnswers(); // 1. Загрузка ответов при загрузке страницы.
    
    // 2. Условный запуск автосохранения
    const currentPath = window.location.pathname.split('/').pop();
    if (allowedPages.includes(currentPath)) {
        attachSaveListeners(); // Привязка к событию 'change'
        // ⭐️ НОВОЕ: Привязка к событию 'click' навигации для гарантии сохранения
        attachNavigationListeners(); 
    }
});