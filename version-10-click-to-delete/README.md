## VERSION 10 -  CLICK TO DELETE  

## Overview

On the tenth section of the tutorial we covered the 'click to delete' button creation and how to clean up our UI. 
We found a way to create delete buttons, move on from indexes and introducing the attribute 'class'. ID's only work for unique elements. In our case, deleteButtons are not unique, so assigning them the same class name is a reasonable way to identify them and the li that is 'attached' to them. 

Also, we covered the concept of the programming pattern 'event delegation': "DOM event delegation is a mechanism of responding to ui-events via a single common parent rather than each child, through the magic of event "bubbling" (aka event propagation)." [StackOverflow](https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation)

Basically, each one of the deleteButtons have a parent-node li-node; and this li-node has an ID. This method made us able to track the ID of the li-node that the user wanted to delete via click-event. 



___


## Requirements 


#### There should be a way to create delete buttons

```js
createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  }
```

---

#### There should be a delete button for each todo

```js
  todoLi.appendChild(this.createDeleteButton());
```

---


#### Each li should have an id that has the todo position

```js
  for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      //----------------//
      todoLi.id = 'i';
```

---


#### Delete buttons should have access to the todo id AND clicking delete should update todoList.todos and the DOM

```js
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event){
      // get the element that was clicked on
    var elementClicked = event.target;
  
      //check if elementClicked is a delete button
    if(elementClicked.className === 'deleteButton') {
      handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
       }
    });  
  }
```

---

### Glitch Link

[Version 10](https://glitch.com/edit/#!/ultra-practical-javascript)

