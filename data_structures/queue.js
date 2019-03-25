// Queues
// Similar to Stack
// Stacks are LIFO - Queues are FIFO

function Queue(){

  collection = [];

  this.print = function(){
      console.log(collection); // prints to console
  };

  this.enqueue = function(element){
      collection.push(element); // adds element to the end
  };

  this.dequeue = function() {
    return collection.shift(); // returns and removes the first element
  };

  this.front = function() {
    return collection[0]; // returns without removing
  };

  this.size = function() {
    return collection.length; // returns size
  };

  this.isEmpty = function() {
    return (collection.length === 0); // returns true if queue is empty otherwise false
  };

}

var q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
