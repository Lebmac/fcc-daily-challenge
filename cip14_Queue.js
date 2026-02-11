/* 
=== Source ===
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-queue-class 
*/

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    collection = collection.concat(item);
  };

  this.dequeue = function() {
    const res = collection.at(0);
    collection = collection.slice(1);
    return res;
  };

  this.front = function() {
    return collection.at(0);
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length < 1;
  };
  // Only change code above this line
}
