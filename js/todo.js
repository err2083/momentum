const todoContainer = document.querySelector('.js-todo-form');
const inputTodoBox = todoContainer.querySelector('input');
const todoList = document.querySelector('.js-todo');

const TODO_OBJ = "todoObj";

let toDos = [];

function saveTodo() {
    localStorage.setItem(TODO_OBJ, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentNode;
    todoList.removeChild(li);

    const newTodos = toDos.filter(function(todo) {
        return todo.id !== parseInt(li.id);
    });

    toDos = newTodos;

    saveTodo();
}

function addTodo(text) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener('click', deleteTodo);
    const span = document.createElement('span');
    btn.innerText = 'X';
    span.innerText = text;

    const newId = toDos.length + 1;

    li.id = newId;
    li.appendChild(btn);
    li.appendChild(span);

    todoList.appendChild(li);

    const todoObj = {
      id : newId,
      text : text
    };

    toDos.push(todoObj);

    saveTodo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = inputTodoBox.value;
    inputTodoBox.value = '';
    addTodo(currentValue);
}

function loadTodo() {
    const items = localStorage.getItem(TODO_OBJ);
    if (items !== null){
        JSON.parse(items).forEach(function(item){
            addTodo(item.text);
        })
    }
}

function init() {
    loadTodo();
    todoContainer.addEventListener('submit', handleSubmit);
}

init();