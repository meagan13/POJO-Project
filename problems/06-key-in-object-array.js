/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

***********************************************************************/
//loop over the arrray
//if the key is if the current object, return true
//else return false

function keyInObjectArray(objArray, keyString) {
  for(let i = 0; i < objArray.length; i++) {       //loop over the array of objects
    let currentObject = objArray[i];                //now we're in an object

    if (currentObject[keyString] !== undefined) {   //or, if(keyString in currentObject) {}
      return true;
    }                                             //If the value exists then the key exists

  }
  return false;
}

//replace line 29 with: if (keyString in currentObject)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
