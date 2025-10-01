document.addEventListener('DOMContentLoaded', () => {
    const gapSelects = document.querySelectorAll('.gap-select');

    gapSelects.forEach(select => {
        // Изначально проверяем все селекты
        if (select.value === '') {
            select.classList.add('is-empty');
        }

        // Добавляем обработчик события 'change'
        select.addEventListener('change', () => {
            if (select.value === '') {
                select.classList.add('is-empty');
            } else {
                select.classList.remove('is-empty');
            }
        });
    });
});