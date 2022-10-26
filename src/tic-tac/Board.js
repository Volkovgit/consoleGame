function Board() {
  const height = 3;
  const width = 3;
  const boardArray = () => {
    const rows = Array(width).fill(' ');
    const table = Array(height).fill(rows);
    return table;
  };

  const boardObject = {
    board: boardArray(),
    getBoard() {
      return this.board;
    },
    updateBoard(newBoard) {
        this.board = newBoard
    },
  };

  return boardObject;
}

// console.log(Board().getBoard());

module.exports = Board;
