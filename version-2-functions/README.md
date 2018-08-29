## VERSION 2 - FUNCTIONS

### Overview

On the first section of the tutorial we learned the concept and future functionality of functions during the development of the To-Do project.

### Requirements 
-------

#### It should have a function to display todos
```js
    var todos = ['item 1', 'item 2', 'item 3'];

    function displayTodos() {
        console.log('My todos:', todos);
    };
```

---

#### It should have a function to add todos
```js 
    function addTodo(todo) {
        todos.push(todo);
        displayTodos();
}
```

---
#### It should have a function to change todos
```js 
    function changeTodo(position, newValue) {
        todos[position]= newValue;
        displayTodos();
}
```

---

#### It should have a function to delete todos;
```js 
    function deleteTodo(position){
        todos.splice(position, 1);
        displayTodos();
}

```

