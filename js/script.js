//store todos in object
var todoList = {
    todos: ['item1','item2','item3'],
    //display todo items
    displayItems: function() {
      console.log(this.todos);
    },
    //add todo item
    addItem: function(item) {
      this.todos.push(item);
      this.displayItems();
    },
    //change todo item
    //takes in # param (position) and any value type param (newValue)
    changeItem: function(position, newValue) {
      this.todos[position] = newValue;
    },
    //delete todo item
    deleteItem: function(position) {
      this.todos.splice(position, 1);
    }
};

//display todos


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
