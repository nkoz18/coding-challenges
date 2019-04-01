function isSubsequence(str1, str2){

  var i = 0; // first pointer
  var j = 0; // second pointer

  if (!str1) return true; // if first string is empty return true;

  while (j < str2.length) { // while j is less than the length of the second string

    if (str2[j] === str1[i]) i++; // if the char at index j in the second string is the same as the char at index i in string 1 then increment i by one
                                  // i only moves if the current index matches the next one we are on in the first string

    if (i === str1.length) return true; // if i is equal to the length of the first string return true - found all the chars in the right order

    j++; // increment j by one - it moves each time

  }

  return false;

}

console.log(isSubsequence("abc", "abacd"));

console.log(isSubsequence("abc", "acb"));
