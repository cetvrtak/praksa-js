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
}

function renderError(msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
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

function getCountryData(country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[13];
      if (!neighbour) throw new Error("No neighbour exists!");

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Neighbour not found"
      );
      // return 23;
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 🙄🙄🙄`);
      renderError(`Something went wrong 🙄🙄🙄 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}
btn.addEventListener("click", () => getCountryData("russia"));

getCountryData("madagascar");
