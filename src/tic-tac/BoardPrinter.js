const Printer = require('./printer');

function BoardPrinter() {
  const PrinterObject = {
    printBoard(board) {
      console.log(board);
      board.forEach((row) => {
        console.log("|"+row.join('|')+"|");
      });
    },
  };
  PrinterObject.__proto__ = Printer();
  return PrinterObject;
}


module.exports = BoardPrinter;
