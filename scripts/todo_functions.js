"use strict"

let todos = [];
let filter = {text: '', complete: false};

function Todo(value) {
    this.todo = value;
    this.complete = false;
    this.id = Math.floor(Math.random() * 100000);
}

const generate_todo_input = (todo)=> {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'todo_' + todo.id;
    input.value = todo.id;
    input.checked = todo.complete;

    input.addEventListener('change', (e)=>{
        e.preventDefault();
        const found_todo = todos.find((todo)=> {
            return todo.id === Number(e.target.value);
        })
        found_todo.complete = e.target.checked;
        saveTodos();
        renderTodos();
    })

    const span = document.createElement('span');
    span.innerText = todo.todo;

    const label = document.createElement('label');
    label.appendChild(input);
    label.appendChild(span);

    return label;
}


const renderTodos = ()=> {
    const todo_list = document.getElementById("todo-list");

    todo_list.innerHTML = "";

    const filtered_todos = todos.filter((todo)=> {
        const value = todo.todo.toLowerCase().includes(filter.text.toLowerCase()) &&
            todo.complete === filter.complete;
        return value;
    })


    filtered_todos.forEach((todo) => {

        const todo_label = generate_todo_input(todo);

        const todo_item = document.createElement('li');
        todo_item.className = "todo-item";

        todo_item.appendChild(todo_label);
        todo_list.appendChild(todo_item);

    })
}

const addTodo = (e)=>{
    const todo_input = document.getElementById('todo-input');

    const value = todo_input.value;
    const todo = new Todo(value)
    todos.push(todo);
    if (value === '') { return };
    todo_input.value = '';
    saveTodos();
}

const saveTodos = ()=> {
    const todo_json = JSON.stringify(todos)
    localStorage.setItem('todos-04', todo_json);
}

const loadTodos = ()=> {
    const todo_json = localStorage.getItem('todos-04');
    if (todo_json === null) {
        todos = [];
    } else {
        todos = JSON.parse(todo_json);
    }
}






