function minSubArrayLen(nums, sum) {

    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
      // if current window doesn't add up to the given sum then
  		// move the window to right
      if(total < sum && end < nums.length){ // if the current total is less than the target sum and we aren't at the end of the array
        total += nums[end]; // add the end to the total
  			end++; // increase the size if the window by 1 - moving the end up by one increases the size of the window
      }
      // if current window adds up to at least the sum given then
  		// we can shrink the window

      else if(total >= sum){ // if the current total is greater than or equal to the target sum
        minLen = Math.min(minLen, end-start); // set the minLen to the smallest of either the min length or the (end - start)
  			total -= nums[start]; // subtract the start index from the total
  			start++; // move the start index up by one, moving the start up by one reduces the size of the window
      }

      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
      else {
        break; // leave the loop if the total is
      }
    }

    return minLen === Infinity ? 0 : minLen;

}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));

console.log(minSubArrayLen([2,1,6,5,4], 9));

console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));

console.log(minSubArrayLen([4,3,3,8,1,2,3],11));

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));
