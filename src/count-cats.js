const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix && !isArray(matrix)) return;
  let matrixToString = '';
  for (let i = 0; i < matrix.length ; i++) {
    matrixToString += matrix[i].toString() + ',';
  }
  let re = new RegExp(/(([^\s])\^\^(?=,)|^\^\^[^\s]|[^\s]\^\^$)/, 'g');
  if (matrixToString.match(re)) {
    return matrixToString.match(re).length;
  }
  else {
    return 0;
  }
};

// function countCatsTest(matrix) {
//   if (!matrix && !isArray(matrix)) return;
//   let matrixToString = '';
//   for (let i = 0; i < matrix.length ; i++) {
//     matrixToString += matrix[i].toString() + ',';
//   }
//   let re = new RegExp(/([^\s]?\^\^[^\s]?|^\^\^[^\s]|[^\s]\^\^$)/, 'g');
//   console.log(matrixToString.match(re));
//   console.log(matrixToString);
//   if (matrixToString.match(re)) {
//     return matrixToString.match(re).length;
//   }
//   else {
//     return 0;
//   }
// };
// countCatsTest([
//   ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//   [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//   [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//   [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//   [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//   [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//   [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//   [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
// ])