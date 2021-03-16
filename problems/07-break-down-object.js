/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/
//convert the keys to an array
//convert the values to an array
//return an array that combines both of those arrays with ...spread

function breakDownObj(obj) {
  let arr1 = Object.keys(obj);      //return the keys as an array
  let arr2 = Object.values(obj);    //return the values as an array
  let arr3 = [...arr1, ...arr2];    //use spread to join the two arrays

  return arr3;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;
