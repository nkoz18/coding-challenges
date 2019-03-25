// Stack as an Object

var Stack = function(){

  this.count = 0;
  this.storage = {}; // Empty Object

  // Add something to the stack on the end
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  // Remove value from the end of the stack
  this.pop = function() {

      if(this.count === 0){
        return undefined;
      }

      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;

  }

  this.size = function(){
    return this.count;
  }

  this.peek = function(){
      return this.storage[this.count - 1];
  }

}

var myStack = new Stack();

myStack.push(1);

console.log(myStack);

myStack.push(2);

console.log(myStack);

console.log(myStack.pop());

console.log(myStack.peek());
