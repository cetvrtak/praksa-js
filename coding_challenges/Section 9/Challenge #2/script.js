const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goalIndex, scorer] of game.scored.entries()) {
  console.log(`Goal ${goalIndex + 1}: ${scorer}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(`The average odd is ${sum / Object.values(game.odds).length}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names �
for (const [outcome, odd] of Object.entries(game.odds)) {
  const outcomeStr = outcome == "x" ? "draw" : `victory ${game[outcome]}`;
  console.log(`Odd of ${outcomeStr}: ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
let scorers = {};
for (const scorer of game.scored) {
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
}
console.log(scorers);
