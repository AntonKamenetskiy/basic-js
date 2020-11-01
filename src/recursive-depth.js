const CustomError = require("../extensions/custom-error");
const sinon = require('sinon');
// module.exports = 
// module.exports = 
module.exports = class DepthCalculator {
  constructor () {
    this.maxDepth = 0;
  }
  calculateDepth(arr, depth = 0) {
    if (!Array.isArray(arr)) 
      return 0;
    this.maxDepth = (depth === 0 ? ++depth : Math.max(++depth, this.maxDepth));
    for (let i in arr) {
      this.calculateDepth(arr[i], depth);
    }
    return this.maxDepth;
  }
}