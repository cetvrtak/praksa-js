// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
function checkDogs(dogsJulia, dogsKate) {
  // 1. Julia found out that the owners of the first and the last two dogs actually have
  // cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
  // ages from that copied array (because it's a bad practice to mutate function
  // parameters)
  let onlyDogs = dogsJulia.slice();
  onlyDogs.splice(0, 1);
  onlyDogs.splice(-2);

  // 2. Create an array with both Julia's (corrected) and Kate's data
  const allDogs = [...onlyDogs, ...dogsKate];

  // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
  // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
  // �
  // ")
  allDogs.forEach(function (age, num) {
    if (age >= 3) {
      console.log(`Dog number ${num + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${num + 1} is still a puppy`);
    }
  });
  // 4. Run the function for both test datasets
}
checkDogs(dogsJulia1, dogsKate1);
console.log("------------ Dataset 2 ---------------");
checkDogs(dogsJulia2, dogsKate2);
