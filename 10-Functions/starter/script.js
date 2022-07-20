"use strict";

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet("Привет")("детка");

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
