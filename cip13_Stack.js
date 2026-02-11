/* 
=== Source ===
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-stack-class 
*/

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(item) {
    collection = collection.concat(item);
  };

  this.pop = function() {
    const res = collection.at(-1);
    collection = collection.slice(0,-1);
    return res;
  };

  this.peek = function() {
    return collection.at(-1);
  };

  this.isEmpty = function() {
    return collection.length < 1;
  };

  this.clear = function() {
    collection = [];
  };
  // Only change code above this line
}
