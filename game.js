//  DECLARE-VARIABLES

let wrap = document.querySelector(".wrap");
let newWrap = document.querySelector(".newWrap");
newWrap.style.display = "none";

//  PLAYER-SELECT-FUNCTION

let playerImage = document.getElementById("playerImage");
let myChoice = "";

selectRock = () => {
  wrap.style.display = "none";
  newWrap.style.display = "block";
  playerImage.src = "Images/rock.png";
  myChoice = 1;
  computerChoice();
  final();
};

selectPaper = () => {
  wrap.style.display = "none";
  newWrap.style.display = "block";
  playerImage.src = "Images/paper.png";
  myChoice = 2;
  computerChoice();
  final();
};

selectScissor = () => {
  wrap.style.display = "none";
  newWrap.style.display = "block";
  playerImage.src = "Images/scissor.png";
  myChoice = 3;
  computerChoice();
  final();
};

//  COMPUTER-SELECT-FUNCTION

let computerImage = document.getElementById("computerImage");
let choice = Math.floor(Math.random() * 3 + 1);

let computerChoice = function compChoice() {
  if (choice === 1) {
    computerImage.src = "Images/rock.png";
  } else if (choice === 2) {
    computerImage.src = "Images/paper.png";
  } else {
    computerImage.src = "Images/scissor.png";
  }
};

//  PLAY-AGAIN-FUNCTION

playAgain = () => {
  wrap.style.display = "block";
  wrap.style.display = "grid";
  newWrap.style.display = "none";
  choice = Math.floor(Math.random() * 3 + 1);
};

//  SCORE-BOARD

let win = document.getElementById("win");
let draw = document.getElementById("draw");
let lose = document.getElementById("lose");
let winScore = 0;
let drawScore = 0;
let loseScore = 0;

function winCounter() {
  winScore++;
  win.textContent = winScore;
}

function drawCounter() {
  drawScore++;
  draw.textContent = drawScore;
}

function loseCounter() {
  loseScore++;
  lose.textContent = loseScore;
}

//  RESET BUTTON

resetFunction = () => {
  winScore = 0;
  drawScore = 0;
  loseScore = 0;
  win.textContent = 0;
  draw.textContent = 0;
  lose.textContent = 0;
  wrap.style.display = "block";
  newWrap.style.display = "none";
  wrap.style.display = "grid";
};

//  DETERMINE RESULT

let announce = document.querySelector(".announce");

final = () => {
  if (choice === myChoice) {
    announce.innerHTML = "Draw 😑";
    drawCounter();
  } else if (choice === 1 && myChoice === 2) {
    announce.innerHTML = "You Win 😁";
    winCounter();
  } else if (choice === 2 && myChoice === 3) {
    announce.innerHTML = "You Win 😁";
    winCounter();
  } else if (choice === 3 && myChoice === 1) {
    announce.innerHTML = "You Win 😁";
    winCounter();
  } else {
    announce.innerHTML = "Computer Wins 😔";
    loseCounter();
  }
};

//  END
