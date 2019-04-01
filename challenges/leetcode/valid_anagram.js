/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 * 
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    let lookup = {};

    for(let i = 0; i < s.length;i++){
        if(lookup[s[i]] === undefined){
            lookup[s[i]] = 1;
        }else{
            lookup[s[i]]++;
        }
    }

    for(let i = 0; i < t.length;i++){
        if(lookup[t[i]]){
            lookup[t[i]]--;
        }else{
            return false;
        }
    }

    return true;

};

console.log(isAnagram("anagram","nagaram"));