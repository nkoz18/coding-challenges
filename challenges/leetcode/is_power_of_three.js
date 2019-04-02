/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if(n < 1) return false;
    
    while(n > 1){
        
        n = n / 3;
        
    }
    
    return n % 1 !== 0 ? false : true;

    
};

console.log(isPowerOfThree(9));