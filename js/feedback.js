// Этот скрипт подключается ко всем страницам результатов (results-A0.html, results-B1+.html и т.д.)
// Он требует, чтобы TEST_DATA был доступен.

/**
 * ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ: Конвертирует ID страницы в заголовок.
 */
function getPageTitle(pageId) {
    if (!pageId) return '&#8203;'; 
    const parts = pageId.split('-');
    // Делаем первую букву заглавной
    let title = parts[0].charAt(0).toUpperCase() + parts[0].slice(1); 
    if (parts.length > 1) {
        // Заменяем 'pt' на 'Part '
        const partNumber = parts[1].replace('pt', 'Part ');
        title += `, ${partNumber}`;
    }
    return title;
}

// ⭐️ НОВАЯ ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ (для расширенного отчета):
function getLevelDescription(level) {
    const descriptions = {
        'A0': 'Beginner',
        'A1–': 'Absolute Beginner',
        'A1+': 'Beginner',
        'A2–': 'Elementary',
        'A2+': 'Pre-Intermediate',
        'B1–': 'Intermediate',
        'B1+': 'Upper-Intermediate',
        'B2': 'Advanced',
        'C1': 'Proficiency'
    };
    return descriptions[level] || 'Level Unknown';
}

// --- ФУНКЦИЯ ОТОБРАЖЕНИЯ ОТЧЕТА ---
function displayErrorReport() {
    // 1. Извлекаем сохраненные детали фидбека (сохранены level_calculator.js)
    const feedbackString = sessionStorage.getItem('reportFeedback');
    const feedbackDetails = JSON.parse(feedbackString) || [];
    
    // 2. Находим контейнер для отчета (он должен быть в вашем HTML результатов)
    const reportContainer = document.getElementById('test-report');

    if (reportContainer) {
        let reportHTML = '';
        let errorNumber = 1; 
        
        if (feedbackDetails.length > 0) {
            // ⭐️ НОВОЕ: Флаг для отслеживания, была ли сгенерирована хотя бы одна ошибка
            let hasActualErrors = false; 

            feedbackDetails.forEach(detail => {
                // ⭐️ НОВОЕ УСЛОВИЕ: Пропускаем элементы, предназначенные только для TXT-отчета
                if (detail.isSkipped) {
                    return; // Пропускаем эту итерацию цикла
                }
                
                // Если мы дошли сюда, значит, это реальная ошибка, а не пропуск
                hasActualErrors = true; 

                const pageTitle = getPageTitle(detail.page);

                // ⭐️ ИСПРАВЛЕНИЕ 1: Добавляем строку для замены <select> на '...'
                // Регулярное выражение находит весь блок <select> и его содержимое.
                const cleanedQuote = detail.taskQuote.replace(/<\s*select[^>]*>[\s\S]*?<\s*\/select\s*>/gi, '...');

                
                // ГЕНЕРАЦИЯ HTML-блока для каждой ошибки
                reportHTML += `
                    <h3 class="panel-title">Wrong answer #<span class="wrong-answer-number">${errorNumber++}</span></h3>
                    <p class="sub-title">${pageTitle}</p>

                    <div class="report-quote">
                        <p class="task-quote">${cleanedQuote}</p>
                        <p class="answer-quote">&#8203;<span class="user-answer">${detail.userAnswer}</span></p>
                        <p class="answer-quote">&#8203;<span class="correct-answer">${detail.correctAnswer}</span></p>
                    </div>

                    <p class="topic">${detail.topic}</p>
                `;
            });
            
            // 1. Устанавливаем содержимое контейнера, если массив не пуст
            if (hasActualErrors) {
                 // Если были ошибки, показываем их
                 reportContainer.innerHTML = reportHTML; 
            } else {
                 // Если массив не пуст, но hasActualErrors=false, значит, были только пропуски
                 reportContainer.innerHTML = `
                    <h3 class="panel-title">Hmm... Looks like you skipped the whole test. 🤨</h3>
                 `;
            }

        } else {
            // 2. Если массив feedbackDetails пуст (нет ни ошибок, ни пропусков)
            reportContainer.innerHTML = `
                <h3 class="panel-title">No wrong answers! You're amazing! 🎉</h3>
            `;
        }
    }

    // ⭐️ ВСТАВИТЬ: Привязка слушателя к кнопке для СКАЧИВАНИЯ ФАЙЛА
    // Мы используем переменную 'feedbackDetails', которая была загружена в начале 'displayErrorReport'
    const saveButton = document.getElementById('save-report-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            
            // 1. Извлекаем ПОЛНЫЙ ОТЧЕТ ИЗ НОВОГО КЛЮЧА
            const fullReportString = sessionStorage.getItem('fullReportDataForTXT');
            const fullReportData = JSON.parse(fullReportString) || {};
            
            const finalLevel = fullReportData.finalLevel || 'N/A';
            const levelStats = fullReportData.levelStats || {};
            const detailsForFile = fullReportData.feedbackDetails || []; // Полный список ошибок и пропусков
            
            let reportContent = '';
            let errorNumber = 1;

            // --- A) Секция УРОВНЯ ---
            reportContent += `\n======================\n`;
            reportContent += `RESULT: ${finalLevel}`;
            reportContent += `\n======================\n`;
            
            // --- B) Секция СТАТИСТИКИ ---
            reportContent += `% OF CORRECT ANSWERS:\n`;
            const statsArray = Object.keys(levelStats).map(level => {
                // Используем ≈ для соответствия вашему примеру
                return `${level} ≈ ${levelStats[level]}%`; 
            });
            reportContent += statsArray.join('; ') + '\n';
            reportContent += `======================\n`;
            
            // --- C) Секция СПИСКА ВОПРОСОВ ---
            reportContent += `WRONG AND SKIPPED ANSWERS:\n`;

            if (detailsForFile.length > 0) {
                detailsForFile.forEach(detail => {
                    const pageTitle = getPageTitle(detail.page);
                    
                    if (detail.isSkipped) {
                        // СКИПНУТЫЙ ОТВЕТ: Reading, Part 1, gap 1 — skipped ⏭
                        const questionNumber = detail.name.split('_').pop(); 
                        reportContent += `${pageTitle}, gap ${questionNumber} — S ⏭\n`; 
                    } else {
                        // НЕПРАВИЛЬНЫЙ ОТВЕТ: Grammar Test, q19
                        // Используем question.name, чтобы получить идентификатор вопроса, например 'q19'
                        reportContent += `${pageTitle}, ${detail.name.split('_').pop()}\n`;
                        reportContent += `ANSW: ${detail.userAnswer} — W ❌\n`;
                    }
                    
                    reportContent += "----------------------------------\n";
                });
            } else {
                 reportContent += "No wrong or skipped answers! Perfect score! 🎉\n";
                 reportContent += "----------------------------------\n";
            }
            reportContent += "---------- END OF LIST ----------\n";


            // 3. Создаем файл и запускаем скачивание
            const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `Russian_Test_Report_${finalLevel}.txt`; 
            
            // Имитируем клик для запуска скачивания
            document.body.appendChild(link);
            link.click(); 
            document.body.removeChild(link);
            
            // Очищаем объект URL после использования
            URL.revokeObjectURL(url); 
        });
    }
    // ----------------------------------------

    // 3. ОЧИСТКА ХРАНИЛИЩА (ВАЖНО!)
    // Отчет показан, теперь удаляем его, чтобы он не появился при следующем случайном заходе.
    sessionStorage.removeItem('reportFeedback');
}

// Запускаем функцию после полной загрузки страницы
document.addEventListener('DOMContentLoaded', displayErrorReport);