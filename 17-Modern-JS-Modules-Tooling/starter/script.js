// Importing module
// import { addToCart, totalPrice as price, qty } from "./shoppingCart.js";
console.log("Importing module");

// addToCart("bread", 5);
// console.log(price, qty);

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("chocolate", 10);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from "./shoppingCart.js";
add("coffee", 2);
add("chocolate", 1);
add("milk", 1);
console.log(cart);

// // console.log("Start fetching");
// // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// // const data = await res.json();
// // console.log(data);
// // console.log("Something else 🍿");

// async function getLastPost() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// }
// // const lastPost = getLastPost();
// // console.log(lastPost);

// // lastPost.then((last) => console.log(last));
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////////////////
// Introduction to NPM
///////////////////////////////////////////
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
// import cloneDeep from "lodash"; -> no go

const state = {
  card: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person("Jonas");
console.log("Jonas" ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

import "core-js/stable";
// import "core-js/stable/array/find";
// import "core-js/stable/promise";

// Polifilling async functions
import "regenerator-runtime/runtime";
