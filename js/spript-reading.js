document.addEventListener('DOMContentLoaded', () => {
    const gapSelects = document.querySelectorAll('.gap-select');

    gapSelects.forEach(select => {
        if (select.value === '') {
            select.classList.add('is-empty');
        }

        select.addEventListener('change', () => {
            if (select.value === '') {
                select.classList.add('is-empty');
            } else {
                select.classList.remove('is-empty');
            }
        });
    });
});
