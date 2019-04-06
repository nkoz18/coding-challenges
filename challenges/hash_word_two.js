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

const getDigits = (value, base) => {
    const result = [];

    while (value) {
        result.push(value % base);
        value /= base;
    }

    return result.reverse();
};

const getChar = index =>
    'acdekilmnoprstuy'.charAt(index);

const getPreimage = value =>
    getDigits(value, 83n)
        .map(Number)
        .map(getChar)
        .join('');

console.log(getPreimage(35502317995n));
console.log(getPreimage(1705070271736160785n));






























//
//
// // The method that prints all
// // possible strings of length k.
// // It is mainly a wrapper over
// // recursive function printAllKLengthRec()
// function printAllKLength(set, k)
// {
//     let n = set.length;
//     printAllKLengthRec(set, "", n, k);
// }
//
// // The main recursive method
// // to print all possible
// // strings of length k
// function printAllKLengthRec(set, prefix, n, k)
// {
//
//     // Base case: k is 0,
//     // print prefix
//     if (k == 0)
//     {
//         //console.log(prefix);
//         return;
//     }
//
//     if(hash(prefix) === 1705070271736160785){
//       console.log(prefix);
//       throw new Error("Word Found!");
//     }
//
//     // One by one add all characters
//     // from set and recursively
//     // call for k equals to k-1
//     for (let i = 0; i < n; ++i)
//     {
//
//         // Next character of input added
//         let newPrefix = prefix + set[i];
//
//         // k is decreased, because
//         // we have added a new character
//         printAllKLengthRec(set, newPrefix, n, k - 1);
//     }
// }
//
// string = "acdekilmnoprstuy";
// set1 = string.split("");
// let k = 9;
// printAllKLength(set1, k);
