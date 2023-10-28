const board = document.getElementById('board');
const generateButton = document.getElementById('generate');

function generatePuzzle() {
  const puzzle = [];
  for (let i = 0; i < 9; i++) {
    puzzle[i] = [];
    for (let j = 0; j < 9; j++) {
      puzzle[i][j] = 0;
    }
  }
  generateCell(0, 0, puzzle);
  return puzzle;
}

function generateCell(row, col, puzzle) {
  if (row === 9) {
    return true;
  }
  if (col === 9) {
    return generateCell(row + 1, 0, puzzle);
  }
  const values = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (isValid(value, row, col, puzzle)) {
      puzzle[row][col] = value;
      if (generateCell(row, col + 1, puzzle)) {
        return true;
      }
      puzzle[row][col] = 0;
    }
  }
  return false;
}

function isValid(value, row, col, puzzle) {
  for (let i = 0; i < 9; i++) {
    if (puzzle[row][i] === value) {
      return false;
    }
    if (puzzle[i][col] === value) {
      return false;
    }
    const boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    const boxCol = Math.floor(col / 3) * 3 + (i % 3);
    if (puzzle[boxRow][boxCol] === value) {
      return false;
    }
  }
  return true;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderPuzzle(puzzle) {
  board.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = puzzle[i][j] || '';
      cell.addEventListener('click', () => {
        // Handle cell selection
        // ...
      });
      board.appendChild(cell);
    }
  }
}

generateButton.addEventListener('click', () => {
  const puzzle = generatePuzzle();
  renderPuzzle(puzzle);
});
