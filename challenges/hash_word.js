// Find a 9 letter string of characters that contains only letters from
//
// acdekilmnoprstuy
//
// such that the hash(the_string) is
//
// 1705070271736160785
//
// if hash is defined by the following pseudo-code:
//
// For example, if we were trying to find the 5 letter string where hash(the_string) was 35502317995, the answer would be "cloud".)
//
// Please enter the one word solution below, and comments you would like to add and zip up and submit your solution.

//console.log(hash("cloud"));

// input is a string - cloud
// output is a integer that is 35502317995

// what is the input
// output of 1705070271736160785

function hash(s) {

  let h = 9;
  let letters = "acdekilmnoprstuy";

  for(let i = 0; i < s.length; i++) {
    h = (h * 83 + letters.indexOf(s[i]));
  }

  return h;

}

const charset = 'acdekilmnoprstuy';

function bruteforce(hash, base = 9, result = {value: ''}) {
  // Always multiply the previous value by 82
  base *= 83;

  for (let i = 0; i < charset.length; i++) {
    // Add the char index to the value
    value = base + i;
    // If we found the hash, append the current char and return
    if (value === hash) {
      result.value += charset[i];
      return base === 747 ? result.value : value;
    }
    // If we went past the hash, return null to mark this iteration as failed
    if (value > hash) {
      return null;
    }
    // Otherwise, attempt next level starting from current value
    value = bruteforce(hash, value, result);
    // If we found the hash from there, prepend the current char and return
    if (value === hash) {
      result.value = charset[i] + result.value;
      return base === 747 ? result.value : value;
    }
  }

  // We tried everything, no match found :(
  return null;
}

console.log(bruteforce(1705070271736160785));
