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

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Something else 🍿");

async function getLastPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
}
// const lastPost = getLastPost();
// console.log(lastPost);

// lastPost.then((last) => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
