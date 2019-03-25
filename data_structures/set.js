// Sets

// Like Array
// No Duplicate Items
// No Particular Order
// Usefulness - Check if an item exists


function mySet() {

  // collection is going to hold the set
  var collection = [];

  //this method will check for the presence of an element and return bool
  this.has = function(element){
    return (collection.indexOf(element) !== -1); // indexOf returns the first index of the occurance of the element in the array or -1 if not there
  };

  //this returns all the values
  this.values = function(){
    return collection;
  };

  //this will add a value to the mySet
  this.add = function(element){
    if(!this.has(element)){
        collection.push(element); // push adds the element to the end of the array
        return true;
    }
    return false;
  };

  // remove item
  this.remove = function(element){ // This is called delete in the ES6 set implementation
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index, 1); // remove element from original at index, how many elements to remove
      return true;
    }
    return false;
  }

  this.size = function() { // in ES6 this is a property not a method and called without () at the end
    return collection.length;
  };

  // this method will return the union of two sets

  this.union = function(otherSet){

    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e){ // executes function once for every element
        unionSet.add(e);
    });
    secondSet.forEach(function(e){
      unionSet.add(e);
    });
    return unionSet;
  };

  // returns the intersection of two sets as a set - the elements they have in common
  this.intersection = function(otherSet){
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // returns the difference of two sets as a set - the elements they do not share
  this.difference = function(otherSet){
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(!otherSet.has(e)){
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // this method will test if the set is a subset of another sets
  this.subset = function(otherSet){
    var firstSet = this.values();
    return firstSet.every(function(value){ //tests each element with the provided function and returns bool
      return otherSet.has(value);
    });
  };

}

var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");

console.log(setA.values());
console.log(setB.values());
console.log(setA.subset(setB));

console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
