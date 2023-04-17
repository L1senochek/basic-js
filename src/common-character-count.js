const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrFirst = s1.split(``);
  let arrSecond = s2.split(``);
  let count = 0;
  for (let i = 0; i < arrFirst.length; i++) {
    let elem = arrFirst[i];
    
    if (arrSecond.includes(elem)) {
      count++;
      arrSecond.splice(arrSecond.indexOf(elem), 1);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
