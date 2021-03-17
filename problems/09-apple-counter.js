/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/
//Understand
//  take in one object with keys and values, some include 'apple'
//  return the number of keys that contain 'apple' at some point
//Plan
//  create a counter variable
//  iterate over the object (for...in loop is specifically for keys)
//    if the current key includes 'apple', increase the counter
//  return the counter



function appleCounter(appleObj) {                             //takes in one object with possibly multiple nested objects
  let counter = 0;                                            //create a counter variable

  for(let key in appleObj) {                                  //Iterate over the keys in that object

    if(key.toLowerCase().includes('apple')) {                 //See if the key (a string), set to lowercase, includes 'apple'
      counter++;
    }                                                         //If the current key includes 'apple'

  }
  return counter;                                              //return the counter
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
