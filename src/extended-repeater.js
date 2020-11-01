const CustomError = require("../extensions/custom-error");

const options = {
  repeatTimes : 0,
  separator : '+',
  addition : '',
  additionRepeatTimes : 0,
  additionSeparator : '|',
}

module.exports = function repeater(str, options) {
  if (typeof str === 'undefined') {
    return '';
  }
  if (str === null) str = 'null';
  let finalStr = String(str);
  let arr = new Array();
  let arr1 = new Array();
    for ( let i = 0; i < (options.additionRepeatTimes || 1); i++) {
      arr.push((typeof options.addition !== 'undefined' && typeof options.addition !== 'null' ? (options.addition === null ? 'null': options.addition ): '').toString());
    }
    let addStr = arr.join(options.additionSeparator || '|' );
    finalStr += addStr;
    for (let i = 0; i < (options.repeatTimes || 1); i++) {
      arr1.push(finalStr);
    }
    return arr1.join(options.separator || '+') || '';
};