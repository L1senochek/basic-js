const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: ``,

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    let arrStr = this.chain.split(`~~`);
    return arrStr.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (this.chain.length) {
      this.chain += `~~( ${value} )`;
    } else {
      this.chain += `( ${value} )`
    }
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let arrStr = this.chain.split(`~~`);

    if (typeof position !== 'number' || position < 1 || position > arrStr.length) {
      this.chain = ``;
      throw new Error(`You can't remove incorrect link!`);
    }

    arrStr.splice((position - 1), 1);
    this.chain = arrStr.join(`~~`);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.chain = this.chain.split(`~~`).reverse().join(`~~`);
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let result = this.chain;
    this.chain = ``;
    return result;
  }
};

module.exports = {
  chainMaker
};
