//accepts sorted array

// returns count of unique values in that array

function countUniqueValues(arr){ // O(n) time and space complexity

  let count = 0;

  for(let i =0; i < arr.length; i++){

      if(arr[i] === arr[i+1]){
        continue;
      }else{
        count++;
      }

  }
  return count;
}



console.log(countUniqueValues([1,1,1,1,1,1,2]));  //2
console.log(countUniqueValues([1,1,1,1,1,1,2,3,4]));  //4
console.log(countUniqueValues([1,2,3,4,5,6,7,8,34,99]));  //10
console.log(countUniqueValues([]));  //0


function countUniqueValueTwo(arr){ // O(n) time and space complexity

  let i = 0;
  let j = 1;

  if(arr.length === 0){
    return 0;
  }

  while( j !== arr.length ){

    if(arr[i] === arr[j]){
      j++;
    }else{
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValueTwo([1,1,1,1,1,1,2]));  //2
console.log(countUniqueValueTwo([1,1,1,1,1,1,2,3,4]));  //4
console.log(countUniqueValueTwo([1,2,3,4,5,6,7,8,34,99]));  //10
console.log(countUniqueValueTwo([]));  //0
