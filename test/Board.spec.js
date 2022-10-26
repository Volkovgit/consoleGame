const { expect } = require('chai');
const Board = require('../src/tic-tac/Board');

describe('Board', () => {
  it('Should be a function', () => {
    expect(Board).to.be.a('function');
  });
  it('Should return Object', () => {
    const objectExemplare = Board();
    expect(objectExemplare).to.be.a('object');
  });

  describe('Board object tests', () => {
    let boardObject;
    beforeEach(() => {
      boardObject = Board();
    });

    it('Should return object 3x3', () => {
      const boardArray = boardObject.getBoard();
      const boardArrayWidth = boardArray.length;
      const width = 3;
      const height = 3;
      expect(boardArrayWidth).to.equals(width);
    });
  });
});
