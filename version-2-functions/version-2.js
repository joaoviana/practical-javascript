
// VERSION 2 - FUNCTIONS

// It should have a function to display todos;
var todos = ['item 1', 'item 2', 'item 3']

function displayTodos() {
    console.log('My todos:', todos);
}

// It should have a function to add todos;
function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

// It should have a function to change todos;
function changeTodo(position, newValue) {
    todos[position]= newValue;
    displayTodos();
}

// It should have a function to delete todos;
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}



