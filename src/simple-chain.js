const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  link: null,
  chain: undefined,
  length: 0,
  thrown: false,

  getLength() {
    return this.length;
  },
  addLink(value) {
    if (typeof value === 'function') value = 'function() {}';
    if (value === undefined) this.link ='( )';
    else this.link = `( ${value} )`;
    if (this.chain === undefined || this.thrown) this.chain = this.link;
    else this.chain += `~~${this.link}`;
    this.length++;
    this.thrown = false;
    return this;
  },
  removeLink(position) {
    if (position > this.length || position < 1 || /[^0-9]/g.test(position.toString())) {
      this.thrown = true;
      throw ('Error');
    }
    let arr = this.chain.split('~~');
    arr.splice(position - 1, 1);
    this.chain = arr.join('~~');
    return this;
  },
  reverseChain() {
    if (!this.chain) return this;
    let arr = this.chain.split('~~');
    arr.reverse();
    this.chain = arr.join('~~');
    return this;
  },
  finishChain() {
    let result = this.chain;
    this.chain = undefined;
    return result;
  }
}
module.exports = chainMaker;
