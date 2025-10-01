document.addEventListener('DOMContentLoaded', () => {
    const mainVisuals = document.querySelector('.main-visuals');
    const backgroundCurve = document.querySelector('.background-curve');
    const levelPointsContainer = document.querySelector('.level-points'); 
    const levelPoints = document.querySelectorAll('.level-point');
    const pointsData = [
        { element: levelPoints[0], leftPercent: 0.14, topPercent: 0.93 }, // A1
        { element: levelPoints[1], leftPercent: 0.36, topPercent: 0.51 }, // A2
        { element: levelPoints[2], leftPercent: 0.65, topPercent: 0.42 }, // B1
        { element: levelPoints[3], leftPercent: 0.885, topPercent: 0.26 }  // B2
    ];

    function positionPoints() {
        if (!mainVisuals || !backgroundCurve || !levelPointsContainer) {
            console.error('Missing main visual elements.');
            return;
        }

        const svgRect = backgroundCurve.getBoundingClientRect();
        const levelPointsRect = levelPointsContainer.getBoundingClientRect();
        const svgMarginTop = parseFloat(window.getComputedStyle(backgroundCurve).marginTop);

        pointsData.forEach(pointData => {
            const pointX_relativeToSVG = svgRect.width * pointData.leftPercent;
            const pointY_relativeToSVG = svgRect.height * pointData.topPercent;
            const finalX = pointX_relativeToSVG;
            const finalY = pointY_relativeToSVG - svgMarginTop; 

            pointData.element.style.position = 'absolute';
            pointData.element.style.left = `${finalX}px`;
            pointData.element.style.top = `${finalY}px`;
            pointData.element.style.transform = `translate(-50%, -50%)`;
        });
    }

    positionPoints();

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(positionPoints, 50);
    });
});
