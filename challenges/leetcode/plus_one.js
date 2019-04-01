/**
 * @param {number[]} digits
 * @return {number[]}
 * 
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 * 
 */
var plusOne = function(digits) {

    if(digits.length === 1){
        if(digits[0] === 9){
            digits[0] = 0;
            digits.unshift(1);
        }else{
           digits[0]++; 
        }
        return digits;
    }
    
    if(digits[digits.length - 1] === 9){

        digits[digits.length - 1] = 0;
        
        for(let i = digits.length - 2; i >= 0; i--){

            if(i === 0 && digits[i] === 9){
                digits[i] = 0;
                digits.unshift(1);
            }else if(digits[i] === 9){
                digits[i] = 0;
            }else{
                digits[i]++;
                break;
            }

        }

    }else{
        digits[digits.length - 1]++;
    }

    return digits;

};

//console.log(plusOne([9]));


var plusOneAnother = function(digits) {

    digits = digits.join("");

    long = BigInt(digits);

    long++;

    digits = long.toString().split("");

    return digits;


}

console.log(plusOneAnother([4,3,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2]));