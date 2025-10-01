const mainContent = document.querySelector('.main-content');
const questionHeaders = document.querySelectorAll('.question-header');

if (questionHeaders.length > 0) {
    questionHeaders.forEach(header => {
        header.addEventListener('click', (event) => {
            event.stopPropagation();
            
            const questionGroup = header.closest('.question-group');
            
            if (questionGroup) {
                document.querySelectorAll('.question-group.is-open').forEach(openGroup => {
                    if (openGroup !== questionGroup) {
                        openGroup.classList.remove('is-open');
                    }
                });

                questionGroup.classList.toggle('is-open');

                if (document.querySelector('.question-group.is-open')) {
                    mainContent.classList.add('has-open-answer');
                } else {
                    mainContent.classList.remove('has-open-answer');
                }
            }
        });
    });
}

document.addEventListener('click', (event) => {
    const isClickInsideQuestion = event.target.closest('.question-group.is-open');

    if (!isClickInsideQuestion) {
        document.querySelectorAll('.question-group.is-open').forEach(openGroup => {
            openGroup.classList.remove('is-open');
        });
        
        mainContent.classList.remove('has-open-answer');
    }
});
