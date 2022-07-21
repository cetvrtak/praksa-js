"use strict";

////////////////////////////////////
// Closures
////////////////////////////////////
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log("Hi, Stevo");
//   };
// };

// g();
// f();
// console.dir(f);

//////////////////////////////////////////
// The Bind Method
//////////////////////////////////////////

// Partial Application
// const addTax = (rate, value) => value + value * rate;
// const addVAT = addTax.bind(null, 0.23);

// // Using function factory
// const taxCalculator = function (rate) {
//   return function (amount) {
//     return amount * (1 + rate);
//   };
// };
// const taxCalc17 = taxCalculator(0.17);
// console.log(taxCalc17(100));

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet("Привет")("детка");

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("Hd234");
// createBooking("Hd234", 2, 800);

///////////////////////////////////////////////
// Passing by values & references
//////////////////////////////////////////////

// const flight = "PC292";
// const passenger = {
//   name: "Stevo Iliskovic",
//   passport: 1234,
// };

// const checkIn = function (flightNum, person) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + person.name;

//   if (passenger.passport == 1234) {
//     alert("Check in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// // checkIn(flight, passenger);
// // console.log(flight);
// // console.log(passenger);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(passenger);
// checkIn(flight, passenger);
