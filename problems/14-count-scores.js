/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***********************************************************************/
//Understand
//  Take in an array of score objects
//  Add up the scores for each person
//  Create a new object that includes each name once with that person's total score (key is the name, value is the score)
//  Return new object
//Plan
//  Define a new object
//  Iterate over the array of objects
//    if the new object does not contain the current key, add the key and set the score value
//    if the new object DOES contain the current key, add the score to the current score
//  Return the object


function countScores(people) {      //function takes in an array
  let results = {};                       //create a new object

  people.forEach(function(obj) {     //loop over the array of scores (array elements are objects)
    let currentName = obj.name;                 //setting it to the object key called name
    let currentScore = obj.score;               //setting it to the object key called score

    if(results[currentName] === undefined) {      //if the current name (obj.name) key is not found in the new results object
      results[currentName] = currentScore;        //set the key to current name and the value for that key to the current number (score)
    } else {
      results[currentName] += currentScore;
    }
  });
  return results;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
