/**
 * @param {number} n
 * @return {number}
 * 
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 * 
 * 
 */
var climbStairs = function(n) {

    let steps = [0,1,2];

    for(let i = 3; i <= n; i++){
        steps[i] = steps[i-1] + steps[i-2];
    }
    return steps[n];
};

console.log(climbStairs(15));