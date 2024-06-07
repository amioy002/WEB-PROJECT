//changeimage
function changeImage(src, info) {
    document.getElementById('main-image').src = src;
    document.getElementById('image-info').textContent = info;
}
 //toggle theme
function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme preference to local storage
}
//displaydatatime
function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    dateTimeElement.textContent = formattedDateTime;
}
//update greeting with the user's name
function updateHeading() {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('user_name');
    if (userName) {
        document.getElementById('greeting').textContent = `Hello, ${userName}`;
        localStorage.setItem('user_name', userName); // Save the user's name to local storage
    } else {
        const savedName = localStorage.getItem('user_name');
        if (savedName) {
            document.getElementById('greeting').textContent = `Hello, ${savedName}`;
        }
    }
}
// Initialize the page
function initializePage() {
    // Load the theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    // Load the date and time
    displayDateTime();
    setInterval(displayDateTime, 1000); // Update the time every second
    // Update the greeting with the user's name
    updateHeading();
}
// Add event listeners
document.addEventListener('DOMContentLoaded', initializePage);
// To-Do List
const PASSWORD = '1234'; // Define the password for the to-do list page
// Event listeners
function checkPassword() {
    const enteredPassword = document.getElementById('password-input').value;
    if (enteredPassword === PASSWORD) {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('todo-section').style.display = 'block';
    } else {
        document.getElementById('password-message').textContent = 'Incorrect password, please try again.';
    }
}
// Functions
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        return;
    }
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    todoList.appendChild(todoItem);
    todoInput.value = '';
}
// Local storage
function saveTodos() {
    const todoList = document.getElementById('todo-list');
    const todos = [];
    for (let i = 0; i < todoList.children.length; i++) {
        todos.push(todoList.children[i].textContent);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
    alert('To-Do list saved successfully!');
}
// Load saved todos
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for (const todo of todos) {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo;
            todoList.appendChild(todoItem);
        }
        alert('To-Do list loaded successfully!');
    } else {
        alert('No saved to-do list found.');
    }
}
// Clear todos
function clearTodos() {
    document.getElementById('todo-list').innerHTML = '';
    alert('To-Do list cleared!');
}
