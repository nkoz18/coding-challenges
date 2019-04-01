// Given a non-empty array of integers, every element appears twice except for one. Find that single one.


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

  let lookup = {};

  for(let i = 0; i< nums.length;i++){
    if(lookup[nums[i]] === undefined){
      lookup[nums[i]] = 1;
    }else{
      lookup[nums[i]]++;
    }
  }

  for(let i = 0; i< nums.length;i++){
    if(lookup[nums[i]] === 1) return nums[i];
  }




};


console.log(singleNumber([2,2,3,3,7,4,4]));
