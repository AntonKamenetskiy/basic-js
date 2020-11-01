const CustomError = require("../extensions/custom-error");

// module.exports = 
module.exports = function transform(arr) {
 if (!Array.isArray(arr)) throw ('Not an array');
 let arr2 = new Array(0);
 let prevExist = false;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && /(-next|-prev|--double-|discard)/.test(arr[i])) {
      if (/-next/.test(arr[i])) {
        if (arr[i + 1] !== undefined) {
          if (/--discard-/.test(arr[i])) {
            i++;
            prevExist = false;
            continue
          } else if (/--double-/.test(arr[i])) {
            arr2.push(arr[i + 1]);
          }
        }
      } else if (/-prev/.test(arr[i]) && prevExist) {
          if (arr[i - 1] !== undefined) {
            if (/--discard-/.test(arr[i])) {
              arr2.pop();
            } else if (/--double-/.test(arr[i])) {
              arr2.push(arr[i - 1]);
            }
          }
      } 
    } else arr2.push(arr[i]);
    prevExist = true;
  }
  return arr2;
}

// transform(arr) 
