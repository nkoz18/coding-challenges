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

  base *= 83;

  for (let i = 0; i < charset.length; i++) {

    value = base + i;

    if (value === hash) {
      result.value += charset[i];
      return base === 747 ? result.value : value;
    }

    if (value > hash) {
      return null;
    }

    value = bruteforce(hash, value, result);

    if (value === hash) {
      result.value = charset[i] + result.value;
      return base === 747 ? result.value : value;
    }
  }


  return null;
}

console.log(bruteforce(1705070271736160785));
//console.log(hash("cloud"));