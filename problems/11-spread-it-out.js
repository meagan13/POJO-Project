/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array.



Examples:
spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => 14;
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];
***********************************************************************/
//Understand
//  Accept two arrays
//  Use spread operator to return a single array comprised of those two arrays
//Plan
//  Declare an arr3 variable to be [...arr1, ...arr2]
//  Return arr3

function spreadItOut(array1, array2) {
  let arr3 = [...array1, ...array2];

  return arr3;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;
