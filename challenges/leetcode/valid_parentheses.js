/**
 * @param {string} s
 * @return {boolean}
 * 
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 */
var isValid = function(s) {
    
    if(s === "") return true;
    if(s.length === 1) return false;

    let openBrackets = [];
    let lastlastOpening;

    if(s[0] === ")" || s[0] === "}" || s[0] === "]"){
        return false;
    }else{
        openBrackets.push(s[0]);
    }

    for(let i = 1; i < s.length; i++){

        lastOpening = openBrackets[openBrackets.length - 1];

        // valid next char is an opening or a closing for the last bracket in the stack
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            openBrackets.push(s[i]);
        }else if(lastOpening === "(" && s[i] === ")"){
            openBrackets.pop();
        }else if(lastOpening === "{" && s[i] === "}"){
            openBrackets.pop();
        }else if(lastOpening === "[" && s[i] === "]"){
            openBrackets.pop();
        }else{
            return false;
        }
    }

    if(openBrackets.length){
        return false;
    }else{
        return true;
    }


};

console.log(isValid("(]"));