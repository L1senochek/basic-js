const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) {
      return 0;
    }
    let countDepth = 0;
    for (const iterator of arr) {
      countDepth = Math.max(countDepth, this.calculateDepth(iterator));

    }
    return 1 + countDepth;

    // 2
    // return 1 + arr.reduce((countDepth, item) => Math.max(countDepth, this.calculateDepth(item)), 0);


  }
}

module.exports = {
  DepthCalculator
};
