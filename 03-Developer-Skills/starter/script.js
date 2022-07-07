// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius:")),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureKelvin());

const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let retString = "...";
  for (let i = 0; i < arr.length; i++) {
    retString += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  return retString;
}
console.log(printForecast(t1));
console.log(printForecast(t2));
