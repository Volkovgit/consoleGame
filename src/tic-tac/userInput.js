const readline = require('readline');

function userInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const userInputObject = {
    rl,
    inputTicTac() {
      let indexInputArr = this.__inputTicTac().then(() => {
        inputChecker = this.__checkNumbers(this.__indexTransormation(indexInputArr));
      });

      console.log(indexInputArr);
    },
    async __inputTicTac() {
      let indArr;
      await rl.question(`Введите индексы клетки : `, (indexes) => {
        indArr = indexes;
        rl.close();
      });
      return indArr;
    },
    __indexTransormation(indexes) {
      return indexes.split(' ').map((el) => Number(el));
    },
    __checkNumbers(arrayWithIndexes) {
      if (arrayWithIndexes.length != 2) return false;
      if (!arrayWithIndexes.every((el) => Number.isInteger(el))) return false;
      return true;
    },
  };

  return userInputObject;
}

userInput().inputTicTac();

module.exports = userInput;
