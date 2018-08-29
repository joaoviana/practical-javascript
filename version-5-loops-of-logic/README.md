## VERSION 5 - LOOPS OF LOGIC

### Overview

On the fifth section of the tutorial we learned the concept of loops, for loops and if-else statements. 

A for loop takes 3 parameters:

  ```for (initialisation; condition; final-expression)
  ```

Basically, it helps the developer repeat a certain amount of code on a certain amount of time. Looping over arrays and working with their indexes has proven to be essential on the development of this project. 

If and Else statements are logic statements which, on this version, will check if the property 'completed' of the object array TodosList is true or false and perform certain actions depending on that property's value.



### Requirements 
-------

#### playTodos should tell you if .todos is empty
 
 ```js
    if (this.todos.length === 0){
      console.log('Your todo list is empty!')
    }
  ```
---

#### .displayTodos should show .todoText and .completed

For visualisation purposes, we assigned the string (x) for completed = true and string ( ) for completed = false.

```js
   // 
        for (var i = 0 ; i < this.todos.length; i++){
          //displayTodos should show .completed
        if (this.todos[i].completed === true){
            console.log("(x)", this.todos[i].todoText);
        } else {
            console.log("( )", this.todos[i].todoText);         
          }
```

---

### Plunker Link

[Version 5](https://embed.plnkr.co/dUQCZUtJFVpokCGbEIfg/)