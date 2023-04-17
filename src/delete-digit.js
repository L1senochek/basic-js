const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let strN = n.toString();
  let max = 0;

  for (let i = 0; i < strN.length; i++) {
    let arrN = strN.split(``);
    arrN.splice(i, 1);

    let maxNew = parseInt(arrN.join(``));

    max = Math.max(maxNew, max);
  }
  return max;
}

module.exports = {
  deleteDigit
};
