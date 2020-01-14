const body = document.querySelector('body');

const MAX_IMG = 17;

function getNumber() {
    return Math.floor(Math.random() * MAX_IMG) + 1;
}

function loadImage() {
    const number = getNumber();
    const img = new Image();
    img.src = `images/redvelvet_seulgiimg${number}.jpg`;
    img.classList.add('background');

    body.appendChild(img);
}

function init() {
    loadImage();
}

init();