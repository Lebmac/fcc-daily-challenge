/* 
=== Source ===
https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-priority-queue-class 
*/

function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    let i = -1;
    while (++i < this.collection.length) {
      if (this.collection.at(i)[1] > item[1]) 
        break;
    }

    this.collection.splice(i,0,item);
  };

  this.dequeue = function() {
    const res = this.collection.at(0)[0];
    this.collection = this.collection.slice(1);
    return res;
  };

  this.front = function() {
    return this.collection.at(0)[0];
  };

  this.size = function() {
    return this.collection.length;
  };

  this.isEmpty = function() {
    return this.collection.length < 1;
  };
  // Only change code above this line
}
