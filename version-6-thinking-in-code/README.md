## VERSION 6 - THINKING IN CODE

### Overview

On the sixth section of the tutorial we learned the concept 'Thinking in code', which means:

When doing an application design we need to cover all the different cases that our program might behave and code agains these scenarios, so that your application will work as it should be on the finished outcome. 

So, for example, if a product manager requests a certain type of app, I would have to think about all the things that could happen and my code should cover all the different ways that the program would behave. 



### Requirements 
-------

The goal is to consider two cases: if we got every single todo from the list checked as completed(true), make everything false calling the toggleAll method; if there is for example one completed and two other todos not completed, calling toggleAll will mark everything as completed(true).



#### .toggleAll: if everything's true, make everything false
 
 ```js
    if (completedTodos === totalTodos){
        for (var i = 0; i < totalTodos; i++){
          this.todos[i].completed = false;
        }
    } 
  ```
---

#### toggleAll: otherwise, make everything true;


```js

else {
        for (var i = 0; i < totalTodos;i++){
          this.todos[i].completed = true;
        }
    }

```

---

### Plunker Link

[Version 6](https://embed.plnkr.co/dUQCZUtJFVpokCGbEIfg/)