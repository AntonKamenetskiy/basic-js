const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  arr2 = new Array();
  for (i of arr) {
    if (typeof(i) === 'string' && / *[A-Za-z]{2,} */g.test(i)) {
      arr2.push(((i.match(/[A-Za-z]{2,}/g)).toString())[0].toUpperCase());
    }
  }
  arr2.sort();
  if (arr2) return arr2.join('');
  else return false;
};