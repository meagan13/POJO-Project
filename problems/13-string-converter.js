/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/
//Understand
//  Takes in one word as a string
//  Returns an object
//  Object includes letters as keys and the number of times they appear as values
//Plan
//  Create the empty object
//  Iterate over the string
//  If the current letter is NOT in the object, add it and add it's value to one
//  If the current letter IS in the object, increase its value by one
//  Return the new object

function stringConverter(string) {
let letterCounter = {};

for(let i = 0; i < string.length; i++) {
  let currentLetter = string[i];

  if(letterCounter[currentLetter] === undefined) {
    letterCounter[currentLetter] = 1;
  } else {
    letterCounter[currentLetter]++;
  }
}
return letterCounter;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
