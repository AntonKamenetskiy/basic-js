const CustomError = require("../extensions/custom-error");

// const date = Date (2020, 10, 30);
const months = [['Dec', 'Jan', 'Feb'], ['Mar','Apr', 'May'], ['Jun', 'Jul', 'Aug'], ['Sep', 'Oct', 'Nov']];
const seasons = ['winter', 'spring', 'summer', 'autumn'];

module.exports = function getSeason(date) {
  if (date === null) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error ('Error');
  date = date.toString();
  let month = date.match(/(?<= )[A-Za-z]{3}(?= )/g).toString();
  for (i in months) {
    for (j of months[i]) {
      if (j === month) return seasons[i];
    }
  }
  return 'Unable to determine the time of year!';
};
