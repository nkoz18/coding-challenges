function minSubArrayLen(arr, sum){

  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while(start < arr.length){

    if(total < sum && end < arr.length){ // Either the total is less than the sum AND end is less than the array length

      // add the end digit to the total
      total += arr[end];
      // increase the size of the window
      end++;

    }else if(total >= sum){ // or its equal to or greater than the sum

      // set the minLen to smaller of either end-start, or minLen
      minLen = Math.min(minLen, end-start);

      // subtract the start digit from the total
      total -= arr[start];

      // decrease the window size
      start++;

    }else{ // if the end var is greater than or equal to array length
        break;
    }

  }


  if(minLen === Infinity){
    return 0;
  }else{
    return minLen;
  }

}


console.log(minSubArrayLen([2,3,1,2,4,3], 7));

console.log(minSubArrayLen([2,1,6,5,4], 9));

console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));

console.log(minSubArrayLen([4,3,3,8,1,2,3],11));

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));
