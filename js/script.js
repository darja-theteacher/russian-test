document.addEventListener('DOMContentLoaded', () => {
    // 1. Выбираем основной контейнер, который содержит и SVG, и точки
    const mainVisuals = document.querySelector('.main-visuals');
    const backgroundCurve = document.querySelector('.background-curve'); // Сам SVG
    const levelPointsContainer = document.querySelector('.level-points'); // Контейнер для точек

    // 2. Выбираем все элементы точек
    const levelPoints = document.querySelectorAll('.level-point');

    // 3. Данные для позиционирования каждой точки:
    const pointsData = [
        { element: levelPoints[0], leftPercent: 0.14, topPercent: 0.93 }, // A1
        { element: levelPoints[1], leftPercent: 0.36, topPercent: 0.51 }, // A2
        { element: levelPoints[2], leftPercent: 0.65, topPercent: 0.42 }, // B1
        { element: levelPoints[3], leftPercent: 0.885, topPercent: 0.26 }  // B2
    ];

    // Функция, которая рассчитывает и применяет позиции
    function positionPoints() {
        if (!mainVisuals || !backgroundCurve || !levelPointsContainer) {
            console.error('Missing main visual elements.');
            return;
        }

        // Получаем размеры SVG-кривой, которая является фоном
        const svgRect = backgroundCurve.getBoundingClientRect();
        // Получаем размеры контейнера level-points, относительно которого будут позиционироваться точки
        const levelPointsRect = levelPointsContainer.getBoundingClientRect();

        // Если SVG имеет margin-top, нам нужно его учесть
        const svgMarginTop = parseFloat(window.getComputedStyle(backgroundCurve).marginTop);

        pointsData.forEach(pointData => {
            // Рассчитываем положение точки относительно *видимой области SVG*
            // Это координаты внутри SVG, переведенные в пиксели
            const pointX_relativeToSVG = svgRect.width * pointData.leftPercent;
            const pointY_relativeToSVG = svgRect.height * pointData.topPercent;

            // Теперь позиционируем level-point относительно levelPointsContainer
            // Учитываем смещение levelPointsContainer относительно SVG (если есть)
            // И отступ SVG от верхнего края mainVisuals
            
            // Если backgroundCurve имеет margin-top, и levelPointsContainer начинается от top:0,
            // то нужно вычесть margin-top SVG из Y-координаты, чтобы точки "спустились"
            const finalX = pointX_relativeToSVG;
            const finalY = pointY_relativeToSVG - svgMarginTop; // Коррекция на margin-top SVG

            pointData.element.style.position = 'absolute';
            pointData.element.style.left = `${finalX}px`;
            pointData.element.style.top = `${finalY}px`;
            
            // Центрируем саму точку, чтобы ее центр совпадал с рассчитанными координатами.
            pointData.element.style.transform = `translate(-50%, -50%)`;
        });
    }

    // Вызываем функцию при загрузке страницы
    positionPoints();

    // Вызываем функцию при изменении размера окна для предотвращения "уплывания"
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(positionPoints, 50); // Задержка в 50мс для оптимизации
    });
});