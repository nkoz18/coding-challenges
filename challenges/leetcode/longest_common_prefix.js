/**
 * @param {string[]} strs
 * @return {string}
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 */
var longestCommonPrefix = function(strs) {

  if(strs.length === 1) return strs[0];

  let word = strs[0];
  let wordArr = [];

  for(let i = 1; i < strs.length; i++){

    for(let j = 0; j < strs[i].length; j++){
      if(strs[i][j] === word[j]){
        if(wordArr[i-1] === undefined){
          wordArr[i-1] = 1;
        }else{
          wordArr[i-1]++;
        }
      }else{
        break;
      }
    }

  }

  //console.log(wordArr);

  let prefix = "";

  if(wordArr.length === strs.length - 1){

    let prefixLen = Math.min(...wordArr);
     
    for(let i = 0; i < prefixLen; i++){
      prefix += word[i];
    }

    return prefix;
  }else{
    return prefix;
  }
  
};

console.log(longestCommonPrefix(["a","a","b"]));