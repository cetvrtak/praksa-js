"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1_000_000
      ).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

function renderError(msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// function getCountryData(country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1_000_000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData("serbia");
// getCountryData("russia");

///////////////////////////////////////
// function getCountryAndNeighbor(country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country (2)
//     const neighbor = data.borders?.[13];

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// }

// getCountryAndNeighbor("russia");

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch("https://restcountries.com/v2/name/russia");

////////////////////////////////////////////////////
// Consuming promises
////////////////////////////////////////////////////

// function getCountryData(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// }
function getJSON(url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
}

// function getCountryData(country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country ${country} not found ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[13];
//       const neighbour = "crimea";
//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//       // return 23;
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country ${country} not found ${response.status}`);
//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 🙄🙄🙄`);
//       renderError(`Something went wrong 🙄🙄🙄 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// function getCountryData(country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[13];
//       if (!neighbour) throw new Error("No neighbour exists!");

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         "Neighbour not found"
//       );
//       // return 23;
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 🙄🙄🙄`);
//       renderError(`Something went wrong 🙄🙄🙄 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }
// btn.addEventListener("click", () => getCountryData("russia"));

// getCountryData("madagascar");

/////////////////////////////////////////////////
// Building a Simple Promise
/////////////////////////////////////////////////
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw in progress 🍔");
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 🙉"));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// function wait(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// }

// wait(2)
//   .then(() => {
//     console.log("I waited 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I waited another second"));

// Promise.resolve("42").then((x) => console.log(x));
// Promise.reject(new Error("Problems!")).catch((x) => console.log(x));

/////////////////////////////////////////////////
// Promisifying the Geolocation
/////////////////////////////////////////////////
// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (pos) => resolve(pos),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }
// // getPosition().then((pos) => console.log(pos));

// function whereAmI() {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=500031152033919738648x28199`
//       );
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Not Okay ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(`You are in ${data.city}, ${data.state}, ${data.country}`);
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${data.prov}`,
//         "Country not found"
//       );
//     })
//     .then((data) => renderCountry(data))
//     .catch((err) => console.log(err))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }
// btn.addEventListener("click", whereAmI);

/////////////////////////////////////////////////
// Consuming Promises with async/await
/////////////////////////////////////////////////
// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function whereAmI() {
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   const resGeo = await fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=500031152033919738648x28199`
//   );
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   const res = await fetch(
//     `https://restcountries.com/v2/name/${dataGeo.country}`
//   );
//   const data = await res.json();
//   renderCountry(data[0]);
// }
// whereAmI();

/////////////////////////////////////////////////
// Error handling with try...catch
/////////////////////////////////////////////////
// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function whereAmI() {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=500031152033919738648x28199`
//     );
//     if (!resGeo.ok) throw new Error("Problem getting location data");

//     const dataGeo = await resGeo.json();
//     console.log(dataGeo);

//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error("Problem getting country data");

//     const data = await res.json();
//     renderCountry(data[0]);
//   } catch (err) {
//     console.error(`${err} 🥐`);
//     renderError(`🍕 ${err.message}`);
//   }
// }
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();

///////////////////////////////////////////////
// Returning Values from Async Functions
///////////////////////////////////////////////
// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function whereAmI() {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=500031152033919738648x28199`
//     );
//     if (!resGeo.ok) throw new Error("Problem getting location data");
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error("Problem getting country data");
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}`;
//   } catch (err) {
//     console.error(`${err} 🥐`);
//     renderError(`🍕 ${err.message}`);

//     throw err;
//   }
// }
// // console.log("1: Getting location");
// // whereAmI()
// //   .then((city) => console.log(`2: ${city}`))
// //   .catch((err) => console.error(`2: ${err.message} 🍷`))
// //   .finally(() => console.log("3: Location obtained"));

// // Use async/await
// console.log("1: Getting location");
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 🍷`);
//   }
//   console.log("3: Location obtained");
// })();

///////////////////////////////////////////////
// Running Promises in Parallel
///////////////////////////////////////////////
// async function get3Countries(c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map((d) => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// }
// get3Countries("russia", "serbia", "greece");

///////////////////////////////////////////////
// Promise Combinators: race, allSettled and any
///////////////////////////////////////////////
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/turkey`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/italy`),
  ]);
  console.log(res[0]); // returns an array of 1
})();

function timeout(s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long"));
    }, s * 1000);
  });
}

Promise.race([getJSON("https://restcountries.com/v2/name/kenya"), timeout(0.1)])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(`${err} 🙄`));

// Promise.allSettled (ES2020)
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Err"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

// Promise.any (ES2021)
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Err"),
  Promise.resolve("Another success"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
