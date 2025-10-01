// Находим все нужные элементы на странице
const audioPlayer = document.getElementById('custom-player');
const playerButton = document.querySelector('.player-button');
const progressBar = document.querySelector('.progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');

// Счетчик проигрываний
let playCount = 0;
const playLimit = 2; // Задаем лимит в 2 проигрывания

// Функция для обработки клика по кнопке
const handlePlayerClick = () => {
// Если лимит проигрываний достигнут, ничего не делаем
if (playCount >= playLimit) {
return;
}

// Проверяем текущее состояние плеера
if (audioPlayer.paused || audioPlayer.ended) {
// Если плеер на паузе или закончился
audioPlayer.play();
playerButton.classList.add('is-playing');
playerButton.classList.remove('is-repeating');
// Если это первый запуск после повтора, сбрасываем время на 0
if (audioPlayer.ended) {
audioPlayer.currentTime = 0;
}

} else {
// Если плеер играет
audioPlayer.pause();
playerButton.classList.remove('is-playing');
}
};

// Функция для обновления полосы прогресса
const updateProgressBar = () => {
const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
progressBar.style.width = `${progress}%`;
};

// Функция, которая срабатывает, когда аудио заканчивается
const handleAudioEnd = () => {
playCount++;
playerButton.classList.remove('is-playing');
// Если лимит проигрываний достигнут
if (playCount >= playLimit) {
playerButton.classList.remove('is-repeating');
playerButton.classList.add('is-forbidden');
playerButton.classList.add('disabled');
// Добавляем класс, чтобы бар стал серым
progressBar.classList.add('is-finished');
// Деактивируем кнопку и прогресс-бар
playerButton.removeEventListener('click', handlePlayerClick);
progressBarContainer.removeEventListener('click', handleProgressBarClick);
} else {
// Если лимит не достигнут
playerButton.classList.add('is-repeating');
}
};

// Функция для перемотки трека по клику на прогресс-бар
const handleProgressBarClick = (event) => {
const containerWidth = progressBarContainer.clientWidth;
const clickX = event.offsetX;
const newTime = (clickX / containerWidth) * audioPlayer.duration;
audioPlayer.currentTime = newTime;
};


// Добавляем все обработчики событий
playerButton.addEventListener('click', handlePlayerClick);
audioPlayer.addEventListener('timeupdate', updateProgressBar);
audioPlayer.addEventListener('ended', handleAudioEnd);
progressBarContainer.addEventListener('click', handleProgressBarClick);