const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const message_h2 = document.querySelector(".message-section > h2");
const player_score_div = document.getElementById("player-score");
const computer_score_div = document.getElementById("computer-score");
const reset_button = document.getElementById("reset-btn");
const player_win_indicator = document.querySelector("#player-side");
const computer_win_indicator = document.querySelector("#computer-side");
const player_result = document.getElementById("player-result");
const computer_result = document.getElementById("computer-result");
let player_score = 0;
let computer_score = 0;

// Function that creates random number 0 ~ 2 so that it creates a random computer choice of rock || paper || scissors
const computerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3); // 0 ~ 2
  const choices = ["rock", "paper", "scissors"];
  // This is for creating an icon for the random value of the computer choice
  if (randomNumber === 0) {
    computer_result.innerHTML = '<i class="fas">&#xf255;</i>';
  } else if (randomNumber === 1) {
    computer_result.innerHTML = '<i class="fas">&#xf256;</i>';
  } else if (randomNumber === 2) {
    computer_result.innerHTML = '<i class="fas">&#xf257;</i>';
  }

  return choices[randomNumber];
};

// Functions that change the message and increases the score depending on the outcome of the game
// When the player wins,
const playerWin = () => {
  player_score++;
  player_score_div.innerHTML = player_score; // Displays the score
  message_h2.innerHTML = "Player Wins !"; // Changes the text
};
// When the comptuer wins,
const computerWin = () => {
  computer_score++;
  computer_score_div.innerHTML = computer_score; // Displays the score
  message_h2.innerHTML = "Computer Wins !"; // Changes the text
};
// When draw,
const draw = () => {
  message_h2.innerHTML = "It's a Draw.."; // Changes the text
};

// Function that makes the score-board border change color depending on the game result
// * * * Probably need to use switch statement to operate more efficiently * * *
const indicator = result => {
  if (result === "player") {
    player_win_indicator.classList.add("winner-glow");
    setTimeout(() => player_win_indicator.classList.remove("winner-glow"), 800);
    computer_win_indicator.classList.add("loser-glow");
    setTimeout(
      () => computer_win_indicator.classList.remove("loser-glow"),
      800
    );
  } else if (result === "computer") {
    computer_win_indicator.classList.add("winner-glow");
    setTimeout(
      () => computer_win_indicator.classList.remove("winner-glow"),
      800
    );
    player_win_indicator.classList.add("loser-glow");
    setTimeout(() => player_win_indicator.classList.remove("loser-glow"), 800);
  } else if (result === "draw") {
    player_win_indicator.classList.add("draw-glow");
    setTimeout(() => player_win_indicator.classList.remove("draw-glow"), 800);
    computer_win_indicator.classList.add("draw-glow");
    setTimeout(() => computer_win_indicator.classList.remove("draw-glow"), 800);
  }
};

// Function that creates and displays resulted icon of the click
const displayIcon = choice => {
  switch (choice) {
    case "rock":
      player_result.innerHTML = '<i class="fas">&#xf255;</i>';
      break;
    case "paper":
      player_result.innerHTML = '<i class="fas">&#xf256;</i>';
      break;
    case "scissors":
      player_result.innerHTML = '<i class="fas">&#xf257;</i>';
    default:
      return null;
  }
};

// Function that resets all the values to the initial point
const reset = () => {
  player_score = 0;
  computer_score = 0;
  player_score_div.innerHTML = player_score;
  computer_score_div.innerHTML = computer_score;
  message_h2.innerHTML = "Rock, Paper, Scissors, Shoot !";
  player_result.innerHTML = "";
  computer_result.innerHTML = "";
};

// Function that compares both player and computer's choices and decide which wins and loses
const result = playerChoice => {
  let computer = computerChoice();
  switch (playerChoice + computer) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      indicator("draw");
      break;
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      playerWin();
      indicator("player");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerWin();
      indicator("computer");
      break;
    default:
      message_h2.innerHTML = "Oops, Something went wrong..";
      break;
  }
};

// Function that runs when rock || paper || scissors buttons are clicked
const run = () => {
  rock_div.addEventListener("click", () => {
    result("rock");
    displayIcon("rock");
  });
  paper_div.addEventListener("click", () => {
    result("paper");
    displayIcon("paper");
  });
  scissors_div.addEventListener("click", () => {
    result("scissors");
    displayIcon("scissors");
  });
  reset_button.addEventListener("click", () => {
    reset();
  });
};
// Let the fun start
run();
