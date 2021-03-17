/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/
//Understand
//  Take in an array
//  Return an object
//  New object should include a key for each unique fruit and a value for the number of times that fruit appears
//Plan
//  Create an empty object {}
//  Loop over the array
//    If the new object does NOT include the current element:
//      Set the current element name as the key and the value as one
//    If the new object DOES include the current array element:
//      Increase the key with that same name by one
//  Return the new object

function arrayConverter(array) {                    //["apple", "banana", "potato", "banana"]
  let counterObject = {};                           //new object

 for(let i = 0; i < array.length; i++) {             //loop over the array
    let currentWord = array[i];

    if(counterObject[currentWord] === undefined) {    //if object at the current word is not in the object give it that value
      counterObject[currentWord] = 1;
    } else {
      counterObject[currentWord]++;
    }
  }
  return counterObject;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
