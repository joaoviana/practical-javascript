## VERSION 8 - GETTING DATA FROM INPUTS

## Overview

On the eight section of the tutorial we covered the techniques provided by the DOM and html and JS in order to process user input and improve our app's user interaction.

We want the methods on the todoList object to handle different events.

Creating the handlers object with distinct property-functions increased the readibility. 

Working with the DOM objects and getting the elements' values, attributes.
___


## Requirements 


#### it should have working controls for .addTodo
 
 ```html
 <div>
     <button onclick= "handlers.addTodo()">Add</button>
     <input id = "addTodoTextInput" type="text">
   </div>
  
 ```

```js
addTodo: function(){
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  }

```

---

#### it should have working controls for .changeTodo

 ```html
  <div>
      <button onclick = "handlers.changeTodo()" >Change Todo</button>
      <input type="number" id="changeTodoPositionInput" />
      <input type="text" id="changeTodoTextInput"  />
    </div>
    
  
 ```

```js
changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput = "";
    changeTodoTextInput = "";
  }

```

---

#### it should have working controls for .deleteTodo

 ```html
    <div>
      <button onclick = "handlers.deleteTodo()" >Delete Todo</button>
      <input type="number" id="deleteTodoPositionInput" />
    </div>
  
 ```

```js
  deleteTodo: function(){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  }
```

___

#### it should have working controls for .toggleCompleted

 ```html
    <div>
      <button onclick = "handlers.toggleCompleted()" >Toggle Completed</button>
      <input type="number" id="toggleCompletedPositionInput" />
    </div>
  
 ```

```js
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  }
```

___


### Plunker Link

[Version 8](https://embed.plnkr.co/dUQCZUtJFVpokCGbEIfg/)

___
### Notes 

WHY REFACTORING?

It is something that happens a lot on the real world. 
Optimisation and continuous improvements are essential actions to improve your code.

Looking continuously over your code and trying to make it more efficient is a great method to become a good programmer.
