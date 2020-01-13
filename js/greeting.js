const greetContainer = document.querySelector('.js-greeting-form');
const inputBox = greetContainer.querySelector('input');
const greeting = document.querySelector('.js-greeting');

const USER_NAME = 'currentName';
const SHOWING = 'showing';

function paintGreeting(name) {
    greetContainer.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${name}`;
}

function saveName(name) {
    localStorage.setItem(USER_NAME, name);
}

function askName() {
    greetContainer.classList.add(SHOWING);
    greetContainer.addEventListener('submit', function(event){
        event.preventDefault();
        const currentValue = inputBox.value;
        paintGreeting(currentValue);
        saveName(currentValue);
    })
}

function loadName() {
    const currentName = localStorage.getItem(USER_NAME);
    if (currentName !== null) {
        paintGreeting(currentName);
    } else {
        askName();
    }
}

function init() {
    loadName();
}

init();