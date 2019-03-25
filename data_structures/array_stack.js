// Stacks

// push - place onto Stack
// pop - removing top element
// peek - display top element
// length  - how many elements are on the Stack

// Can use array or use object oriented approach and create a stack class

var letters = [];

var word = "racecar"

var rWord = "";

for (var i = 0; i < word.length; i++){
  letters.push(word[i]);
}

console.log(letters);

// in reverse order
for (var i = 0; i < word.length; i++){
  rWord += letters.pop();
}

console.log(rWord);


if(rWord === word){
  console.log(word + " is a palindrome");
}else{
  console.log(word + " is not a palindrome");
}
