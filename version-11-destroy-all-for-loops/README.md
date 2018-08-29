## VERSION 10 -  DESTROY ALL FOR LOOPS

## Overview

On the eleventh as last section of the tutorial we tried to remove all the for-loops and introduce the forEach method on the todoList arrays. 
Also, we took a longer time to interpret the callback function inside the forEach and how to access the view object, by simply passing a second parameter, 'this', so that 'this' knows it is equal to the view object. So later we can access its functions inside the callback function. 

___


## Requirements 


#### todoList.toggleAll should use forEach

```js
toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo){
      if(todo.completed === true)
        completedTodos++;
    });
   
    this.todos.forEach(function(todo){
      if(completedTodos === totalTodos){
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
```

---

#### view.displayTodos should use forEach

```js
 var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    
    todoList.todos.forEach(function(todo, position){
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = position;
      
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    
    }, this);// it will refer to the view Object.
```

---

### Glitch Link

[Version 11](https://glitch.com/edit/#!/ultra-practical-javascript)

---

### Understanding 'this' - by Gordon 

5-cases where 'this' plays distinct parts in your program

[Github](https://github.com/gordonmzhu/cheatsheet-js)