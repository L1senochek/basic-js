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
    console.log('arrStr.length!!!!!!!!!!!!!!!!!!!!', arrStr.length);
    return arrStr.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) {
      this.chain += `(  )~~`;
    } else {
      this.chain += `( ${value} )~~`;
    }
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.chain; 
    if (this.chain[-1] === `~`) {
      result = this.chain.slice(0, -2);
    }
    let arrStr = result.split(`~~`);
    if (typeof position !== 'number' || position < 1 || position > arrStr.length) {
      this.chain = ``;
      throw new Error(`You can't remove incorrect link!`);
    }
    let chainRemove = arrStr[position - 1];
    this.chain = this.chain.replace(chainRemove + `~~`, ``);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.chain.length !== 0) {
      let str =  this.chain.split(`~~`);
      let newStr = str.reverse();
      newStr.splice(0, 1);
      if (newStr.length === 1) {
        this.chain = newStr.join(`~~`) + `~~`;
      } else {
        this.chain = newStr.join(`~~`);
      }
      
    } 
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.chain.slice(0, -2);
    this.chain = ``;
    return result;
  }
};

module.exports = {
  chainMaker
};
