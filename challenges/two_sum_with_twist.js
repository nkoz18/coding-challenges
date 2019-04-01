// write a function that, given a list of integers, and a target integer will print all of the pairs that sum to the target

// Do not repeat pairs

// findPairs([1, 3, -1, 11, 7], 10)
// (3, 7)
// (-1, 11)

// findPairs([5, 5, 5], 10)
// (5, 5)

// findPairs([5, 5, 5, 5], 10)
// (5, 5)
// (5, 5)

// findPairs([5, 5, 5, 5, 5], 10)
// (5, 5)
// (5, 5)

// findPairs([5, 5, 5, 5, 5, 5 ], 10)
// (5, 5)
// (5, 5)
// (5, 5)

// given a list of numbers and a target number, find all the pairs that add up to the target without repeating any pairs

// inputs are a array of integers , and an integers
// outputs are an array or arrays

function findPairs(arr, target){

  // create an object for tracking pairs - hash hashMap
  let hashMap = {};

  // create empty Array for results
  let results = [];

  // go through the input array in a loop and populate the hashMap
  for(let i = 0; i < arr.length; i++){

    // store in the hash map the value as a key, and the frequency of that value as the value in the hashMap
    if(hashMap.hasOwnProperty(arr[i])){

      hashMap[arr[i]]++;

    }else{

      hashMap[arr[i]] = 1;

    }

  }

  // console.log(arr);
  // console.log(hashMap);

  console.log(arr);

  // go through the input array in a loop
  for(let i = 0; i < arr.length; i++){ // for the length of an array

    console.log(hashMap);

    var diff = target - arr[i]; // get the complimentary value to the current index that would make the target number is summed, or the difference

    hashMap[arr[i]]--; // decrement the hashmap frequency counter for the current value by one

    if(hashMap[diff] > 0) { // Check to see if the hashmap has the complimentary value with a frequecy higher than 0

      results.push([arr[i], diff]); // then push the current array value and the compliment into the results

    }

    hashMap[diff]--; // decrement the frequency of the compliment from the hashMap

    // two decrements because we use a pair each time.

  }

  // I need it to never use the same value or index as part of a pair more than once
  // somehow I need to keep track of which specific indices have been used


  console.log(results);

  // return the array or results
  //return results;

}


findPairs([1, 3, -1, 11, 7], 10);

findPairs([5, 5, 5, 5], 10);
