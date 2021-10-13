"use strict"



const todo_form = document.getElementById("todo-form");
const add_button = document.getElementById("add-button");
const filter_input = document.getElementById("filter-input");
const complete_filter = document.getElementById('complete-filter');



function getTodoListener() {
    return (e) => {
        e.preventDefault();
        addTodo(e);
        renderTodos();
    };
}

add_button.addEventListener('click', getTodoListener());
todo_form.addEventListener("submit", getTodoListener());
filter_input.addEventListener("input", (e)=> {
    e.preventDefault();
    filter = filter_input.value;
    renderTodos();

})

complete_filter.addEventListener('change', (e)=> {
    e.preventDefault();
    filter.complete = e.target.checked;
    renderTodos();
})


loadTodos();
renderTodos();