/*
Filename: ComplexCode.js

This code is a complex and elaborate implementation of a tic-tac-toe game. It utilizes various advanced JavaScript concepts such as object-oriented programming, event handling, and DOM manipulation. The game logic is implemented using an AI that uses the minimax algorithm to make smart moves against the player.

Note: This code assumes the availability of a HTML file with a div element with id "board" to display the game board.

*/

// Global Variables
const PLAYER_X = 'X';
const PLAYER_O = 'O';
const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
  [0, 4, 8], [2, 4, 6]               // Diagonals
];

let currentPlayer;
let board;
let gameOver;
let aiEnabled;

// Initialize the game
function initGame() {
  currentPlayer = PLAYER_X;
  board = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  aiEnabled = true;
  renderBoard();
  addBoardEventListeners();
}

// Render the game board
function renderBoard() {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';

  for (let i = 0; i < board.length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = board[i];
    boardElement.appendChild(cell);
  }
}

// Add event listeners to the game board cells
function addBoardEventListeners() {
  const cells = document.getElementsByClassName('cell');

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      if (!gameOver && cells[i].innerText === '') {
        makeMove(i, currentPlayer);
      }
    });
  }
}

// Handle player's move
function makeMove(index, player) {
  board[index] = player;
  renderBoard();
  checkGameOver();

  if (!gameOver) {
    currentPlayer = (currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;
    if (currentPlayer === PLAYER_O && aiEnabled) {
      makeAIMove();
    }
  }
}

// Handle AI's move
function makeAIMove() {
  let bestScore = -Infinity;
  let bestMove;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      board[i] = PLAYER_O;
      let score = minimax(board, 0, false);
      board[i] = '';
      
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  makeMove(bestMove, PLAYER_O);
}

// Minimax algorithm for AI move selection
function minimax(board, depth, isMaximizingPlayer) {
  let result = checkGameOutcome();

  if (result !== null) {
    return result;
  }

  if (isMaximizingPlayer) {
    let bestScore = -Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = PLAYER_O;
        let score = minimax(board, depth + 1, false);
        board[i] = '';
        bestScore = Math.max(score, bestScore);
      }
    }

    return bestScore;
  } else {
    let bestScore = Infinity;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = PLAYER_X;
        let score = minimax(board, depth + 1, true);
        board[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    }

    return bestScore;
  }
}

// Check if the game is over
function checkGameOver() {
  let result = checkGameOutcome();

  if (result !== null) {
    gameOver = true;
    alert(result + ' wins!');
  } else if (!board.includes('')) {
    gameOver = true;
    alert('It\'s a tie!');
  }
}

// Check the outcome of the game
function checkGameOutcome() {
  for (let combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;

    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return (board[a] === PLAYER_X) ? PLAYER_X : PLAYER_O;
    }
  }

  return null;
}

// Start the game
initGame();