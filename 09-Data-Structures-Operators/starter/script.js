"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

/////////////////////////////////////////////
// String Methods Practice
/////////////////////////////////////////////
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${from.slice(0, 3).toUpperCase()} to ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`.padStart(50);
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////////////////
// Working with Strings - Part 3
////////////////////////////////////////////////////

// console.log("a+very+nice+string".split("+"));
// console.log("Stevo Iliskovic".split(" "));
// const [firstName, lastName] = "Stevo Iliskovic".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// function capitalizeName(name) {
//   const splitName = name.toLowerCase().split(" ");
//   let capitalizedFullName = [];
//   for (const n of splitName) {
//     // const capitalized = n[0].toUpperCase() + n.slice(1);
//     const capitalized = n.replace(n[0], n[0].toUpperCase());
//     capitalizedFullName.push(capitalized);
//   }
//   console.log(capitalizedFullName.join(" "));
// }
// capitalizeName("Jessica Ann Smith Davis");
// capitalizeName("stevo iliskovic");

// // Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("Stevo".padStart(25, "+").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(12345678));
// console.log(maskCreditCard(1234555500009866));
// console.log(maskCreditCard("2302934239432"));

// // Repeat
// const m = "Enjoy Your Trip! ";
// console.log(m.repeat(10));

// function funFuction(n) {
//   console.log(`${n} planes in line ${"✈".repeat(n)}`);
// }
// funFuction(3);

///////////////////////////////////
// Working with strings - Part 2
//////////////////////////////////

// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log("Stevo".toUpperCase());

// // Fix capitalization in name
// const passenger = "stevo"; // Stevo
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = "hello@infomedia.com";
// const loginEmail = "  Hello@Infomedia.Com \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email == normalizedEmail);

// // Replacing
// const priceUK = "288,87£";
// const priceUS = priceUK.replace("£", "$").replace(",", ".");
// console.log("priceUK:", priceUK, "priceUS:", priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replace("door", "gate"));
// // console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// // Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("neo"));
// console.log(plane.includes("Booing"));
// console.log(plane.startsWith("Airbnb"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo"))
//   console.log(`${plane} is a part of the new Aribus family`);

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("snacks"))
//     console.log("You are not allowed to check in");
//   else console.log("Welcome aboard");
// };
// checkBaggage("I have a laptop, some food and a pocket knife");
// checkBaggage("Socks and camera");
// checkBaggage("I got some snacks and coffe");

///////////////////////////////////////////
// Working with strings: Part 1
/////////////////////////////////////////

// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B373".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s == "B" || s == "E") console.log("You got the middle seat");
//   else console.log("Not a middle seat");
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("Stevo"));
// console.log(typeof new String("Stevo"));

// console.log(typeof new String("Stevo").slice(1));

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct answer"],
//   [false, "Try again"],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key == "number") console.log(`Answer ${key}: ${value}`);
// }
// // const answer = prompt("Your answer");
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get("correct") == answer));

// // Convert map to array
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Maps: Fundamentals
// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze");
// console.log(rest.set(2, "Lisbon"));
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// let ordersSet = new Set(["Pizza", "Pasta", "Risotto"]);
// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Breadk"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );
// console.log(new Set("StevoIliskovic").size);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(name, openingHours, categories);
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 1;
// let b = 7;
// const obj = { a: 23, b: 4, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const newMenu = [...restaurant.mainMenu, "Gnoche"];
// console.log(newMenu);

// // Copy array
// const mainMenyCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const myName = "Stevo";
// const letters = [...myName, " ", "I."];
// console.log(letters);
// console.log(...myName);
// // console.log(`${...myName} Iliskovic`);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
