## VERSION 4 - BOOLEANS

### Overview

On the fourth section of the tutorial we learned the concept of Booleans and the role that they will play in the structure of the array of Todos. 

We changed the todo arrays from arrays of text to arrays of objects, with two properties: a todoText and a completed boolean value (and how we can manipulate these properties individually with JavaScript)



### Requirements 
-------

#### todoList.addTodo should add objects;
 
 ```js
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  }
  ```
---

#### todoList.changeTodo should change the todoText property

```js
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  }
```

---


####  todoList.toggleCompleted should change the completed property
  
```js
toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
```
---

### Plunker Link

[Version 4](https://plnkr.co/edit/dUQCZUtJFVpokCGbEIfg?p=info)