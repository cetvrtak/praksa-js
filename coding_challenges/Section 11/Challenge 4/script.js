const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).

// Your tasks:
console.log("========= Task 1 ===========");
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
dogs.forEach((dog) => (dog.recPortion = dog.weight ** 0.75 * 28));
console.log(...dogs);

console.log("========= Task 2 ===========");
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood > sarahsDog.recPortion ? "much" : "little"
  }\n\n`
);

console.log("========= Task 3 ===========");
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

////////////////////////////////////
// Solution 1
////////////////////////////////////
// const ownersEatTooMuch = Array.from(dogs)
//   .filter((dog) => dog.curFood > dog.recPortion)
//   .map((dog) => dog.owners);
// console.log(ownersEatTooMuch);

////////////////////////////////////
// Solution 2
////////////////////////////////////
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
  (arrs, dog) => {
    arrs[
      dog.curFood > dog.recPortion ? "ownersEatTooMuch" : "ownersEatTooLittle"
    ].push(...dog.owners);
    return arrs;
  },
  { ownersEatTooMuch: [], ownersEatTooLittle: [] }
);
console.log(ownersEatTooMuch, ownersEatTooLittle);

console.log("========= Task 4 ===========");
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too much!`);

console.log("========= Task 5 ===========");
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
console.log(dogs.some((dog) => dog.curFood == dog.recPortion));

console.log("========= Task 6 ===========");
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
console.log(
  dogs.some(
    (dog) =>
      dog.curFood >= 0.9 * dog.recPortion && dog.curFood <= 1.1 * dog.recPortion
  )
);

console.log("========= Task 7 ===========");
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
console.log(
  dogs.filter(
    (dog) =>
      dog.curFood >= 0.9 * dog.recPortion && dog.curFood <= 1.1 * dog.recPortion
  )
);

console.log("========= Task 8 ===========");
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)
const sortedDogs = dogs.slice().sort((a, b) => a.recPortion - b.recPortion);
console.log(sortedDogs);
