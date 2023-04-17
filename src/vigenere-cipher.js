const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {

    this.type = value;
    this.alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    if (!key || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let upperMessage = message.toUpperCase();
    let upperKey = key.toUpperCase();

    let resultMessage = ``;
    let indexKey = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      if (this.alphabet.includes(upperMessage[i])) {
        resultMessage += this.alphabet[((this.alphabet.indexOf(upperMessage[i])) + (this.alphabet.indexOf(upperKey[indexKey % key.length]))) % 26];
        indexKey += 1;
      } else {
        resultMessage += upperMessage[i];
      }
    }
    if (this.type === false) {
      return resultMessage.split(``).reverse().join(``);
    } else {
      return resultMessage;
    }
  }
  decrypt(encryptedMessage, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let upperEncryptedMessage = encryptedMessage.toUpperCase();
    let upperKey = key.toUpperCase();

    let resultEncryptedMessage = ``;
    let indexKey = 0;

    for (let i = 0; i < upperEncryptedMessage.length; i++) {
      if (this.alphabet.includes(upperEncryptedMessage[i])) {
        let indexCypher = this.alphabet.indexOf(upperEncryptedMessage[i]);
        let keyIndex = this.alphabet.indexOf(upperKey[indexKey % key.length]);
        let res = indexCypher - keyIndex;
        let indexDecipheredStr;
        if (res >= 0) {
          indexDecipheredStr = res % 26;
        } else {
          indexDecipheredStr = (res + 26) % 26;
        }
        resultEncryptedMessage += indexDecipheredStr;
        indexKey += 1;
      } else {
        resultEncryptedMessage += upperEncryptedMessage[i];
      }

    }
    if (this.type === false) {
      return resultEncryptedMessage.split(``).reverse().join(``);
    } else {
      return resultEncryptedMessage;
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
