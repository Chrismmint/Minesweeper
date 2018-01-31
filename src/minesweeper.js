const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row[columnIndex] = ' ';
    }
    board[rowIndex] = row;
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    let row = [];
    for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row[columnIndex] = null;
    }
    board[rowIndex] = row;
  }

  numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (!board[randomRowIndex][randomColumnIndex] === 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++
    };
  }

  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {

  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  const numberOfBombs = 0;

  for (var x = -1; x < 2; x++) {

    const columnCheckIndex = x + columnIndex;

    if (columnCheckIndex > -1 && columnCheckIndex < numberOfColumns) {

      for (var y = -1; y < array.length; i++) {

        const rowCheckIndex = x + rowIndex;

        if (rowCheckIndex > -1 && rowCheckIndex < numberOfRows) {

          if (!x === 0 && !y === 0) {

            if (bombBoard[rowCheckIndex][columnCheckIndex] = 'B') {
              numberOfBombs++
            };
          };
        };
      };
    };
  };

  return(numberOfBombs);
};



const printBoard = board => {
  console.log(board.map(row => row.join('|')).join('\n'));
};


let playerBoard = generatePlayerBoard(8,3);
let bombBoard = generateBombBoard(8,3,5);

printBoard(bombBoard);
