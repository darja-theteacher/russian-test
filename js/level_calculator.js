(function() {
    const LEVEL_ORDER = ['A1–', 'A1+', 'A2–', 'A2+', 'B1–', 'B1+', 'B2', 'C1'];
    const THRESHOLD_REQUIREMENTS = { 0: 48, 1: 63, 2: 75, 3: 80, 4: 80, 5: 90, A0_MIN_PASS: 48 };
    const CORRECT_POINTS = 1;
    const PENALTY_POINTS = -0.2;

    function calculateLevelScores() {
        const userAnswersString = sessionStorage.getItem('testAnswers');
        const userAnswers = JSON.parse(userAnswersString) || {};
        const userQuotesString = sessionStorage.getItem('testQuotes');
        const userQuotes = JSON.parse(userQuotesString) || {}; 

        const levelScores = {};     
        const levelMaxScores = {};  
        const feedbackDetails = []; 

        if (typeof TEST_DATA === 'undefined') {
            console.error("Ошибка: Объект TEST_DATA не найден.");
            return { levelScores, levelMaxScores, feedbackDetails: [] };
        }

        for (const questionName in TEST_DATA) {
            if (!TEST_DATA.hasOwnProperty(questionName)) continue;

            const question = TEST_DATA[questionName];
            const userAnswer = userAnswers[questionName]; 
            const level = question.level;

            if (!levelScores[level]) {
                levelScores[level] = 0;
                levelMaxScores[level] = 0;
            }

            levelMaxScores[level] += CORRECT_POINTS; 

            if (userAnswer && userAnswer === question.correct) {
                levelScores[level] += CORRECT_POINTS;
            } else if (userAnswer && userAnswer !== question.correct) {
                levelScores[level] += PENALTY_POINTS;
                
                const pageNameParts = questionName.split('-');
                const pageId = pageNameParts.slice(0, 2).join('-'); 

                feedbackDetails.push({
                    name: questionName,
                    page: pageId, 
                    userAnswer: userAnswer, 
                    correctAnswer: question.correct,
                    topic: question.topic, 
                    taskQuote: userQuotes[questionName] || '&#8203;'
                });
            }

            else if (!userAnswer) { 
                const pageNameParts = questionName.split('-');
                const pageId = pageNameParts.slice(0, 2).join('-'); 
                
                feedbackDetails.push({
                    name: questionName, 
                    page: pageId, 
                    userAnswer: '— skipped', 
                    correctAnswer: 'N/A', 
                    topic: question.topic, 
                    taskQuote: '', 
                    isSkipped: true 
                });
            }
        }

        return {
            levelScores,
            levelMaxScores,
            feedbackDetails 
        };
    }

    function determineFinalLevel(levelScores, levelMaxScores) {
        const levelResults = {};
        for (const level of LEVEL_ORDER) {
            const score = levelScores[level] || 0;
            const maxScore = levelMaxScores[level] || 0;
            let percent = 0;
            if (maxScore > 0) percent = (score / maxScore) * 100;
            levelResults[level] = { percent: parseFloat(percent.toFixed(2)), passed: false };
        }

        const a1MinusLevel = 'A1–';
        const a1MinusData = levelResults[a1MinusLevel];
        const a0MinPass = THRESHOLD_REQUIREMENTS.A0_MIN_PASS;

        if (!a1MinusData || a1MinusData.percent < a0MinPass) return 'A0'; 

        let finalLevel = 'A1–'; 
        for (let targetIndex = 0; targetIndex < LEVEL_ORDER.length; targetIndex++) {
            const targetLevel = LEVEL_ORDER[targetIndex];
            let allPrerequisitesMet = true;

            for (let prereqIndex = 0; prereqIndex <= targetIndex; prereqIndex++) {
                const prereqLevel = LEVEL_ORDER[prereqIndex];
                const prereqData = levelResults[prereqLevel];

                const distance = targetIndex - prereqIndex; 
                const requiredThreshold = THRESHOLD_REQUIREMENTS[Math.min(distance, 5)];

                if (!prereqData || prereqData.percent < requiredThreshold) {
                    allPrerequisitesMet = false;
                    break; 
                }
            } 
            if (allPrerequisitesMet) {
                finalLevel = targetLevel;
            } else {
                break; 
            }
        } 
        return finalLevel;
    }

    function calculateAndRedirect(event) {
        event.preventDefault(); 
        
        const { levelScores, levelMaxScores, feedbackDetails } = calculateLevelScores();
        const finalLevel = determineFinalLevel(levelScores, levelMaxScores); 
        const levelStats = {};
        for (const level in levelMaxScores) {
            if (levelMaxScores[level] > 0) {
                const percent = (levelScores[level] / levelMaxScores[level]) * 100;
                levelStats[level] = Math.round(percent); 
            } else {
                levelStats[level] = 0;
            }
        }

        const fullReportData = {
            finalLevel: finalLevel,
            levelStats: levelStats,
            feedbackDetails: feedbackDetails 
        };
        sessionStorage.setItem('fullReportDataForTXT', JSON.stringify(fullReportData));
        sessionStorage.setItem('reportFeedback', JSON.stringify(feedbackDetails));
        sessionStorage.removeItem('testAnswers');
        sessionStorage.removeItem('testQuotes'); 
        
        window.location.href = `result-${finalLevel}.html`;
    }

  
    document.addEventListener('DOMContentLoaded', () => {
        const resultsButton = document.getElementById('results-button');
        if (resultsButton) {
            resultsButton.addEventListener('click', calculateAndRedirect);
        }
    });

})(); 
