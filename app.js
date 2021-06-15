let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getBotChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, botChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
    botChoice
  )}. YOU WIN!🎉 `;
}

function lose(userChoice, botChoice) {
  botScore++;
  userScore_span.innerHTML = userScore;
  botScore_span.innerHTML = botScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
    botChoice
  )}. YOU LOSE☠️...`;
}

function tie(userChoice, botChoice) {
  const smallUserWord = "you".fontsize(3).sub();
  const smallBotWord = "bot".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)} is same as ${convertToWord(
    botChoice
  )}. IT'S A TIE!👾 `;
}

function game(userChoice) {
  const botChoice = getBotChoice();
  switch (userChoice + botChoice) {
    case "sp":
    case "rs":
    case "pr":
      win(userChoice, botChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, botChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, botChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
