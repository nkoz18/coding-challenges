function PriorityQueue () {

  var collection = [];

  this.printCollection = function(){
    console.log(collection);
  }

  this.enqueue = function(element) {
    if(this.isEmpty()){
      collection.push(element); // If its empty just add it
    }else{
      var added = false;
      for(var i=0;i<collection.length;i++){
        if(element[1] < collection[i][1]){ // if the element priority is less than the priority at this particular index
          collection.splice(i,0,element); // in this usage, splice is being used to add an element at index i, removing 0 items, the new item
          added = true;
          break;  // once its added you can leave the loop
        }
      }
      if(!added){
        collection.push(element); // if it is not added somewhere in the middle - then add it at the end
      }
    }
  }

  this.dequeue = function() {
    var value = collection.shift(); // removes and returns the first value
    return value[0]; // without priority
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


var pq = new PriorityQueue();

pq.enqueue(['John Smith', 2]);
pq.enqueue(['Sean Williams', 3]);
pq.enqueue(['Eric Stoltz', 1]);
pq.enqueue(['Frank Abignale', 2]);

pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
