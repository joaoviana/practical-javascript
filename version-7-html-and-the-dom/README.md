## VERSION 7 - HTML AND THE DOM

### Overview

On the seventh section of the tutorial we covered HTML and the DOM.
The app is reaching the limits of what it can do on
the console;
We would like to improve on the User Experience.
We want to start making a User Interface, like clicking,typing etc


We learned about HTML - as well as the tags, attributes - and the DOM.
The DOM is the browser's interpretation of the HTML.
You can use the DOM with other programming languages. 
The nodes of every document are organised in a tree structure, called the DOM tree

Event listeners played a big part on making it interactive and improving the UX. 
   


### Requirements 
-------


#### There should be a 'Display Todos' button and a "Toggle All" button in the app
 
 ```html
  <button id = "displayTodosButton">Display Todos</button>
    <button id = "toggleAllButton"> Toggle All</button>
  ```

---

#### Clicking "display todos" should run todoList.displayTodos


```js
var displayTodosButton = document.getElementById("displayTodosButton");
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});


```

---

#### Clicking 'Toggle all' should run todoList.toggleAll

```js
var toggleAllButton = document.getElementById("toggleAllButton");
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
```

___


### Plunker Link

[Version 7](https://embed.plnkr.co/dUQCZUtJFVpokCGbEIfg/)

___
### Notes From Data Types and Comparisons Section

  Why 
  ```js
  [1,2,3] === [1,2,3] //returns false
  ```
  
  JavaScript when doing comparisons will only return true when they have matching memory addresses.
  And both these array objects have distinct memory addresses, besides having identical values.
  
  The only way that this would be true is if:
  ```js
  var array1 = [1,2,3]; 
  array1 === array1; // returns true
  ```
 
 ___
  
  when declaring a new object with a certain property, its variable will assign a memory address, and that memory address points to that new object with that new property
___

```js
  var myHouse = {colour: 'blue'};
  var colour = myHouse.colour;
  colour = 'red';
```
  Does the property in myHouse changes? No!


  ___