let currentPlayer = "X";
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function placeMarker(cellIndex) {
  if (boardState[cellIndex] === "" && gameActive) {
    boardState[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;
    if (checkWin()) {
      alert("Player " + currentPlayer + " wins!");
      gameActive = false;
    } else if (checkDraw()) {
      alert("It's a draw!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (
      boardState[a] === currentPlayer &&
      boardState[b] === currentPlayer &&
      boardState[c] === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return !boardState.includes("");
}

function resetBoard() {
  currentPlayer = "X";
  gameActive = true;
  boardState = ["", "", "", "", "", "", "", "", ""];
  let cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.innerText = "";
  }
}
