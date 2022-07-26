// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
function calcAverageHumanAge(ages) {
  // 1. Calculate the dog age in human years using the following formula:
  // if the dog is <= 2 years old, humanAge = 2 * dogAge.
  // If the dog is > 2 years old,
  // humanAge = 16 + dogAge * 4
  const humanAges = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  // 2. Exclude all dogs that are less than 18 human years old (which is the same as
  // keeping dogs that are at least 18 years old)
  const filteredAges = humanAges.filter((age) => age >= 18);

  // 3. Calculate the average human age of all adult dogs (you should already know
  // from other challenges how we calculate averages �)

  ///////////////////////////////////
  // Jonas way
  ///////////////////////////////////
  const average = filteredAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return filteredAges.reduce((sum, age) => sum + age, 0) / filteredAges.length;
}
// 4. Run the function for both test datasets

// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
console.log("First data set:", calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
console.log("Second data set:", calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
