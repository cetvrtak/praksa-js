document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector("button");
btn.textContent = "Submit";
btn.addEventListener("click", () => {
  const str = document.querySelector("textarea").value;
  convert(str);
});

function convert(str) {
  const returnArr = [];
  const splitString = str.split("\n");
  for (const s of splitString) {
    // 0. Trim whitspace
    const sTrimmed = s.trim();
    // 0. Transform to lower case
    const sLow = sTrimmed.toLowerCase();
    // 1. Split along _
    const sSplit = sLow.split("_");

    // Discard names longer than 2 words
    if (sSplit.length > 2) continue;

    let convertedWord = sSplit[0];
    // 2. Capitalize the subsequent words after 1st
    for (let i = 1; i < sSplit.length; i++) {
      const sCapitalized = sSplit[i].replace(
        sSplit[i][0],
        sSplit[i][0].toUpperCase()
      );
      // 4. Join into a single word
      convertedWord += sCapitalized;
    }
    // 5. Padd the word with spaces
    const padded = convertedWord.padEnd(20, " ");
    // 6. Add ticks
    const ticked = padded + "✅".repeat(splitString.indexOf(s) + 1);
    console.log(ticked);
  }
}

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
