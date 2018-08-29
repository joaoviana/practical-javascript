## VERSION 3 - OBJECTS

### Overview

On the third section of the tutorial we learned the concept and future functionality of objects, their properties and the keyword 'this';

#### An object can have properties 

Within each property is value. So it is a key-alue pair.

```js
var myComputer = {
	operatingSystem: 'mac',
	screenSize: '15 inches',
	purchaseYear: '2011'
};
```
#### Using these properties

```js
myComputer.operatingSystem;
myComputer.screenSize;
myComputer.purchaseYear;

```

When we use these properties, JavaScript knows that this data belongs to the object var myComputer;

#### Objects and functions:

```js
var gordon = {
	name: 'Gordon',
	sayName: function() {
		console.log(this.name);	
	}	
}
```

Keyword called 'this'; when we use 'this' inside of a function that is on a object, 'this' will refer to the object. In this case, it will refer to the object's property called 'name'.

if typed: 

gordon.sayName(); 
it will print out the entire object

if typed: gordon.sayName()

sayName property is set to a function that when called it will refer to the property name inside that object. 

sayName is a method(), is simply a property equal to a function;


### Requirements 
-------

#### It should store the todos array on an object

```js
var todoList = {
    todos: ['item 1', 'item 2', 'item 3']
};

// - It should have a displayTodos method
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function (){
      console.log('My Todos:', this.todos);
    }
};
```
---

#### It should have an addTodo method

```js
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function (){
      console.log('My Todos:', this.todos)
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    }
  };
```

---


#### It should have a changeTodo method

```js
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function (){
      console.log('My Todos:', this.todos)
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    },
    changeTodo: function(position, newValue){
      this.todos[position] = newValue;
      this.displayTodos();
    }
  };
```
---
#### It should have a deleteTodo method 

```js
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function (){
      console.log('My Todos:', this.todos)
    },
    addTodo: function(todo){
      this.todos.push(todo);
      this.displayTodos();
    },
    changeTodo: function(position, newValue){
      this.todos[position] = newValue;
      this.displayTodos();
    },
    deleteTodo: function(position){
      this.todos.splice(position,1);
      this.displayTodos();
    }
    
  };
```

### Plunker Link

[Version 3](https://embed.plnkr.co/dUQCZUtJFVpokCGbEIfg/)