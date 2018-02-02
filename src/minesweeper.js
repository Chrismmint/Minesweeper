class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs)
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    console.log(this._board.playerBoard)
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Over');
      this._board.print()
    } else if (!this._board.hasSafeTiles()) {
      console.log('Win')
    } else {
      console.log('Current Board:')
      this._board.print()

    }
  }
}

class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    //this._numberOfRows = numberOfRows;
    //this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!')
      return
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
  this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {

    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    for (var x = -1; x < 2; x++) {
      const columnCheckIndex = x + this._columnIndex;
      if (columnCheckIndex > -1 && columnCheckIndex < numberOfColumns) {

        for (var y = -1; y < 2; y++) {
          const rowCheckIndex = y + this._rowIndex;

          if (rowCheckIndex > -1 && rowCheckIndex < numberOfRows) {

            if (!(x === 0 && y === 0)) {
              if (this._bombBoard[rowCheckIndex][columnCheckIndex] === 'B') {
                numberOfBombs++
              };
            };
          };
        };
      };
    };
    return(numberOfBombs);
  };

  hasSafeTiles() {
    return(this._numberOfTiles !== this._numberOfBombs)
  }

  print() {
    console.log(this._playerBoard.map(row => row.map(element => element === null ? ' ' : element).join('|')).join('\n'));
  };

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
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

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = [];
    for (var rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
      let row = [];
      for (var columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
        row[columnIndex] = null;
      }
      board[rowIndex] = row;
    }

    let numberOfBombsPlaced = 0;

    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++
      };
    }

    return board;
  };
}

const g = new Game(3, 3, 3);
g.playMove(0, 0);





/*let playerBoard = generatePlayerBoard(5,5);
let bombBoard = generateBombBoard(5,5,6);

console.log('Bomb Board');
printBoard(bombBoard);
console.log('Player Board');
printBoard(playerBoard);



flipTile (playerBoard, bombBoard, 2, 2)
console.log('Updated Board')
printBoard(playerBoard);
*/
