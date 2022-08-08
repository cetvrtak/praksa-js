"use strict";

// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

///////////////////////////////////////////////
// Countries API
///////////////////////////////////////////////
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

function getJSON(url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
}

/////////////////////////////////////////////
// Actual challenge
/////////////////////////////////////////////
function whereAmI(lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=500031152033919738648x28199`
  )
    .then((response) => {
      if (!response.ok) throw new Error(`Not Okay ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.state}, ${data.country}`);
      return getJSON(
        `https://restcountries.com/v2/alpha/${data.prov}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data))
    .catch((err) => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
