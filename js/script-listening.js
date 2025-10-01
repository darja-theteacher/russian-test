const audioPlayer = document.getElementById('custom-player');
const playerButton = document.querySelector('.player-button');
const progressBar = document.querySelector('.progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');

let playCount = 0;
const playLimit = 2; 
const handlePlayerClick = () => {
if (playCount >= playLimit) {
return;
}

if (audioPlayer.paused || audioPlayer.ended) {
audioPlayer.play();
playerButton.classList.add('is-playing');
playerButton.classList.remove('is-repeating');
if (audioPlayer.ended) {
audioPlayer.currentTime = 0;
}

} else {
audioPlayer.pause();
playerButton.classList.remove('is-playing');
}
};

const updateProgressBar = () => {
const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
progressBar.style.width = `${progress}%`;
};

const handleAudioEnd = () => {
playCount++;
playerButton.classList.remove('is-playing');
if (playCount >= playLimit) {
playerButton.classList.remove('is-repeating');
playerButton.classList.add('is-forbidden');
playerButton.classList.add('disabled');
progressBar.classList.add('is-finished');
playerButton.removeEventListener('click', handlePlayerClick);
progressBarContainer.removeEventListener('click', handleProgressBarClick);
} else {
playerButton.classList.add('is-repeating');
}
};

const handleProgressBarClick = (event) => {
const containerWidth = progressBarContainer.clientWidth;
const clickX = event.offsetX;
const newTime = (clickX / containerWidth) * audioPlayer.duration;
audioPlayer.currentTime = newTime;
};

playerButton.addEventListener('click', handlePlayerClick);
audioPlayer.addEventListener('timeupdate', updateProgressBar);
audioPlayer.addEventListener('ended', handleAudioEnd);
progressBarContainer.addEventListener('click', handleProgressBarClick);
