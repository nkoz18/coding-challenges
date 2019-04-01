/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always exist in the array.
 * 
 */
var majorityElement = function(nums) {

    let lookup = {};

    for(let i = 0; i < nums.length; i++){

        if(lookup[nums[i]] === undefined){
            lookup[nums[i]] = 1;
        }else{
            lookup[nums[i]]++;
        }

        if(lookup[nums[i]] > nums.length / 2){
            return nums[i];
        }

    }

    return null;

};

console.log(majorityElement([2,2,1,1,1,2,2]));