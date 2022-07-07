"use strict";

// const myFuncExpression = function () {
//   const myVar = 2;
//   return myVar;
// };

// console.log(myFuncExpression());

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const newLength = friends.unshift("John");
console.log(friends);
console.log(newLength);

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);
