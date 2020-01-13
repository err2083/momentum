const timerContainer = document.querySelector('.js-clock');
const timerText = timerContainer.querySelector('h1');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    timerText.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
