function findLongestSubstring(str){

  let longest = 0; // variable that stores the longest string
  let seen = {}; // have a lookup object
  let start = 0; // starting point

  for (let i = 0; i < str.length; i++) {  // go through the array

    let char = str[i]; // each time grab the current char
    if (seen[char]) { // if the char has been seen
      start = Math.max(start, seen[char]); // assign start the bigger value between start and whats stored in the object
    }
    // index - beginning of substring + 1 (to include current in count)

    longest = Math.max(longest, i - start + 1); // longest gets the max between longest and (current index - start index + 1)

    // store the index of the next char so as to not double count
    seen[char] = i + 1;

  }


  return longest;

}

//console.log(findLongestSubstring("abcc")); // 3
// console.log(findLongestSubstring("")); //0
// console.log(findLongestSubstring("rithmschool")); //7
// console.log(findLongestSubstring("thisisawesome")); //6
// console.log(findLongestSubstring("thecatinthehat")); //7
// console.log(findLongestSubstring("bbbbbb")); //1
// console.log(findLongestSubstring("longestsubstring")); //8
// console.log(findLongestSubstring("thisishowwedoit")); //6

function findLongestSubstringTwo(str) {

    if(str.length === 0) return 0;

    let start = 0;
    let end = 0;
    let max = 0;
    let obj = {};

    while (start <= end && start < str.length) {

      console.log(obj);

        if(end < str.length && !obj[str[end]]) {

            obj[str[end]] = 1;

            end++;

        }else{

            max = Math.max(max, end - start);

            delete obj[str[start]];

            start++;

        }

    }

    return max;

}
