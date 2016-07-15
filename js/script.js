//store todos in object
var todoList = {
    todos: ['item1','item2','item3'],
    displayItems: function() {
      console.log(this.todos);
    },
    addItem: function(item) {
      this.todos.push(item);
      this.displayItems();
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
