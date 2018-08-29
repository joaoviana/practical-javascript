## VERSION 9 -  ESCAPE FROM THE CONSOLE

## Overview

On the ninth section of the tutorial we covered the concept of Escaping from the Console, meaning that we had to improve the UX and the UI of the App and show to the user the todos array by displaying its content on the screen.
To do so, we created an object view{} that would dinamically manage the DOM elements (such as the ul and li) in order to improve the app. 

The appendChild() method has proven to be a useful tool on this subject. 

A snippet:

```js
var todoLi = document.createElement('li');
todoLi
var todosUl = document.querySelector('ul');
todosUl
todosUl.appendChild(todoLi);
```
___


## Requirements 


#### there should be an li element for every todo

```js
 displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = ''; //will clear out the ul before adding
    for ( var i = 0; i < todoList.todos.length ; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
     //_____CODE___
      
      todosUl.appendChild(todoLi);
    }
  }
```

---


#### each li element should contain .todoText and should show .completed

```js
 displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = ''; //will clear out the ul before adding
    for ( var i = 0; i < todoList.todos.length ; i++){
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
         todoTextWithCompletion = '(x) ' + todo.todoText;
      }else {
         todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
```

---

### Plunker Link

[Version 9](https://embed.plnkr.co/dUQCZUtJFVpokCGbEIfg/)

---
### Notes


#### Buzzwords:
High order functions:
   - Functions that accept other functions
   - Enhance the behaviour of other functions
   ex: runWithDebugger, setTimeOut, forEach, addEventListener.

Callback functions:
  - The functions that are passed into higher order functions 
  ex: when you runWithDebugger and the function that is passed as parameter is a callback function 

---

```js
element.addEventListener('click', function());
```

whenever click happens, it will perform the function enhancing its behaviour.

If passing an argument on the that callback functon, it is possible to check on the console the object event's properties, attributes, prototype... as a MouseEvent.




