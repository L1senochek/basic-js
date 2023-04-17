const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // default value:
  let separator;
  let additionSeparator;
  let repeatTimes;
  let addition;
  let additionRepeatTimes;

  let arrStr = [];
  let resultArrStr = [];

  if (options.repeatTimes !== undefined) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }

  if (options.addition !== undefined) {
    addition = options.addition;
  } else {
    addition = ``;
  }

  if (options.additionRepeatTimes !== undefined) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }

  if (options.separator) {
    separator = options.separator;
  } else {
    separator = `+`;
  }

  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  } else {
    additionSeparator = `|`;
  }

  for (let j = 0; j < additionRepeatTimes; j++) {
    arrStr.push(String(addition));
  }

  let newStr = String(str) + arrStr.join(additionSeparator);
  for (let i = 0; i < repeatTimes; i++) {
    resultArrStr.push(newStr);
  }
  return resultArrStr.join(separator);
}


module.exports = {
  repeater
};
