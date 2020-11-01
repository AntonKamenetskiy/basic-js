const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurns = 2 ** disksNumber - 1;
  let turnsPerSec = turnsSpeed / 3600;
  let result = {
    turns: minTurns,
    seconds: Math.floor(minTurns / turnsPerSec)
  }
  return result;
};