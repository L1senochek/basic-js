const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = {};
  for (let i = 0; i < domains.length; i++) {
    let subDomain = domains[i].split(`.`).reverse();
    let checkedDomain = ``;

    for (let j = 0; j < subDomain.length; j++) {
      checkedDomain += `.${subDomain[j]}`;
      if (result[checkedDomain]) {
        result[checkedDomain]++;
      } else {
        result[checkedDomain] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
