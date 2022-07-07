"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 12;

// console.log(document.querySelector(".guess").value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "🛑 Invalid number!";
    displayMessage("🛑 Invalid number!");
  } else if (guess == number) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector(".check").disabled = true;
  } else if (guess != number) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > number ? "📈 Too high" : "📉 Too low";
      displayMessage(guess > number ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "💣 Game Over!";
      displayMessage("💣 Game Over!");
      document.querySelector(".score").textContent = 0;
    }

    //   else if (guess > number) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "📈 Too high";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "💣 Game Over!";
    //       document.querySelector(".score").textContent = 0;
    //     }
    //   } else if (guess < number) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "📉 Too low";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "💣 Game Over!";
    //       document.querySelector(".score").textContent = 0;
    //     }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
  document.querySelector(".number").textContent = "?";
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
