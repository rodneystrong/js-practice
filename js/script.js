//store todos in object
var todoList = {
    todos: [],
    //display todo items
    // displayItems: function() {
    //   //console.log(this.todos);
    //   //check if todos is empty
    //   if(this.todos.length === 0) {
    //     console.log('empty list');
    //   }
    //   else {
    //     console.log('My Todos:');
    //     //display item text
    //     for(i=0; i < this.todos.length; i++) {
    //       //if completed
    //         //show (x)
    //       //else
    //         //show ()
    //       if(this.todos[i].completed) {
    //         console.log('(X) ' + this.todos[i].itemTextProp);
    //       }
    //       else {
    //         console.log('() ' + this.todos[i].itemTextProp);
    //       }
    //     } //end for loop
    //   } //end else
    // },
    //add todo item
    addItem: function(itemText) {
      this.todos.push({
        itemTextProp: itemText,
        completed: false
      });
      //this.displayItems();
    },
    //change todo item
    //takes in # param (position) and any value type param (newValue)
    changeItem: function(position, todoText) {
      this.todos[position].todoText = todoText;
    },
    //toggle completed state
    toggleCompleted: function(position) {
      //we can do it like the line below, but it's a lot of typing
      //this.todos[position].completedd = !this.todos[position];
      //instead we create a var equal to the position
      var item = this.todos[position];
      item.completed = !item.completed;
    },
    //delete todo item
    // deleteItem: function(position) {
    //   this.todos.splice(position, 1);
    // },
    //toggle all complete/incomplete
    toggleAll: function() {
      //var called completedItems === totalItems
      var totalItems = this.todos.length;
      var completedItems = 0;
      //get # of completed items
      for(i=0; i < totalItems; i++) {
        if(this.todos[i].completed) {
          completedItems++;
        }
      }
      //if all completed
      if(completedItems === totalItems) {
        //get completedItems
        for(i=0; i < totalItems; i++) {
          if(this.todos[i].completed) {
            this.todos[i].completed = false;
          }
        }
      }
      //else
      else {
        for(i=0; i < totalItems; i++) {
          this.todos[i].completed = true;
        }
      }

    }
};

//EVENTS!
//access to toggle button
var toggleAllBtn = document.querySelector('.toggle');

//event listener to run the toggleAll fn
toggleAllBtn.addEventListener('click',function(){
  todoList.toggleAll();
  views.displayItems();
});

//grab add item button
var addItemBtn = document.querySelector('.add-item');

//grab input field
var addItemInput = document.querySelector('.add-item-input');

addItemBtn.addEventListener('click', function() {
  //console.log(addItemInput.value);
  todoList.addItem(addItemInput.value);
  addItemInput.value = '';
  views.displayItems();
});

//refocus on addItem input
addItemBtn.addEventListener('click', function() {
  addItemInput.focus();
});
//allow user to hit enter key to add item
addItemInput.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    todoList.addItem(addItemInput.value);
    addItemInput.value = '';
    views.displayItems();
  }
});

//delete todo item
//grab button

//grab input for delete

//event to delete onclick
deleteBtn.addEventListener('click', function() {


  views.displayItems();
});

//Button to toggle ONE item
var toggleBtn = document.querySelector('.toggle-item');
//grab input for specific item to toggle
var toggleItemInput = document.querySelector('.toggle-item-input');

toggleBtn.addEventListener('click', function() {
  todoList.toggleCompleted(toggleItemInput.valueAsNumber);
  toggleItemInput.value = '';
  views.displayItems();
});

//should be an li for every todo
//every item should have .todoText
//each item shows completed property

var views = {
  //grab the ul
  //create an li
  //get the value from the input and put it to the li
  displayItems: function() {
    if(todoList.todos.length === 0) {
      alert('no items yet');
    }
    var theUl = document.querySelector('.the-list');
    theUl.innerHTML = '';
    //go through your array of todos and create LIs for them
    for(i=0; i < todoList.todos.length; i++) {
      var theLi = document.createElement('li');
      var position = todoList.todos[i];
      if(position.completed === true) {
        theLi.textContent = '(x) ' + position.itemTextProp;
      }
      else {
        theLi.textContent = '( ) ' + position.itemTextProp;
      }
      //theLi.textContent = todoList.todos[i].itemTextProp;
      theUl.appendChild(theLi);
    }
  },
  createDeleteButton: function() {
    var the
  }
};

//create delete buttons on all items
//assign click event for the delete buttons
//make sure the click delete's the specific item it's next to
//most likely will have for loop and attach delete click to
//specific array item in the items.
//run the displayItems() after each delete.

//
// //display all the todos
// function displayAll() {
//   console.log(todos);
// }
//
// //add new items
// function addItem(item) {
//   todos.push(item);
// }
//
// //change todo item
// function changeItem(position, newValue) {
//   todos[position] = newValue;
// }
//
// //delete an item
// function deleteItem(position) {
//   todos.splice(position,1);
// }
//
// displayAll();
// changeItem(3,'yo');
// displayAll();
