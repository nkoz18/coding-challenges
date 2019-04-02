/**
 * @param {string} s
 * @return {boolean}
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/g, '');
    let temp = s.split("").reverse().join(""); 
    return temp === s ? true : false;    
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));