let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function cellClick(cellIndex) {
  if (!gameActive || gameState[cellIndex] !== '') return;

  gameState[cellIndex] = currentPlayer;
  document.getElementById(cellIndex).innerText = currentPlayer;

  checkWin();
  checkDraw();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      gameActive = false;
      document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
      break;
    }
  }
}

function checkDraw() {
  if (!gameState.includes('') && gameActive) {
    gameActive = false;
    document.getElementById('message').innerText = 'It\'s a draw!';
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;

  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.innerText = '';
  }
}