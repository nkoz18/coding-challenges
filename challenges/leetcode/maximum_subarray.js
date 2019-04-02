/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 */
var maxSubArray = function(nums) {


    var prev = 0;
    var max = -Infinity;
  
    for (var i = 0; i < nums.length; i++) {
      prev = Math.max(prev + nums[i], nums[i]);
      max = Math.max(max, prev);
    }
    return max;



    
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));