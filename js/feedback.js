function getPageTitle(pageId) {
    if (!pageId) return '&#8203;'; 
    const parts = pageId.split('-');
    let title = parts[0].charAt(0).toUpperCase() + parts[0].slice(1); 
    if (parts.length > 1) {
        const partNumber = parts[1].replace('pt', 'Part ');
        title += `, ${partNumber}`;
    }
    return title;
}

// --- for detailed report ---
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

// --- report ---
function displayErrorReport() {
    const feedbackString = sessionStorage.getItem('reportFeedback');
    const feedbackDetails = JSON.parse(feedbackString) || [];
    const reportContainer = document.getElementById('test-report');

    if (reportContainer) {
        let reportHTML = '';
        let errorNumber = 1; 
        
        if (feedbackDetails.length > 0) {
            let hasActualErrors = false; 

            feedbackDetails.forEach(detail => {
                if (detail.isSkipped) {
                    return; 
                }
                
                hasActualErrors = true; 

                const pageTitle = getPageTitle(detail.page);

                // --- '...' for <select>
                const cleanedQuote = detail.taskQuote.replace(/<\s*select[^>]*>[\s\S]*?<\s*\/select\s*>/gi, '...');

                
                // --- wrong answers ---
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
            
            if (hasActualErrors) {
                 reportContainer.innerHTML = reportHTML; 
            } else {
                 reportContainer.innerHTML = `
                    <h3 class="panel-title">Hmm... Looks like you skipped the whole test. 🤨</h3>
                 `;
            }

        } else {
            reportContainer.innerHTML = `
                <h3 class="panel-title">No wrong answers! You're amazing! 🎉</h3>
            `;
        }
    }

    const saveButton = document.getElementById('save-report-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            
            const fullReportString = sessionStorage.getItem('fullReportDataForTXT');
            const fullReportData = JSON.parse(fullReportString) || {};
            
            const finalLevel = fullReportData.finalLevel || 'N/A';
            const levelStats = fullReportData.levelStats || {};
            const detailsForFile = fullReportData.feedbackDetails || []; 
            
            let reportContent = '';
            let errorNumber = 1;

            reportContent += `\n======================\n`;
            reportContent += `RESULT: ${finalLevel}`;
            reportContent += `\n======================\n`;
            
            reportContent += `% OF CORRECT ANSWERS:\n`;
            const statsArray = Object.keys(levelStats).map(level => {
                return `${level} ≈ ${levelStats[level]}%`; 
            });
            reportContent += statsArray.join('; ') + '\n';
            reportContent += `======================\n`;
            
            reportContent += `WRONG AND SKIPPED ANSWERS:\n`;

            if (detailsForFile.length > 0) {
                detailsForFile.forEach(detail => {
                    const pageTitle = getPageTitle(detail.page);
                    
                    if (detail.isSkipped) {
                        const questionNumber = detail.name.split('_').pop(); 
                        reportContent += `${pageTitle}, gap ${questionNumber} — S ⏭\n`; 
                    } else {
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


            const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `Russian_Test_Report_${finalLevel}.txt`; 
            
            document.body.appendChild(link);
            link.click(); 
            document.body.removeChild(link);
            
            URL.revokeObjectURL(url); 
        });
    }
    // ----------------------------------------

    sessionStorage.removeItem('reportFeedback');
}

document.addEventListener('DOMContentLoaded', displayErrorReport);
