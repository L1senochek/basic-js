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
  constructor(value) {
    if (value === false) {
      this.type = false;
    }
  }
  type = true;

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let upperMessage = message.toUpperCase();
    let upperKey = key.toUpperCase();

    let resultMessage = ``;
    let indexKey = 0;

    for (let i = 0; i <= upperMessage.length - 1; i++) {
      if (upperMessage[i].charCodeAt() < 65 || upperMessage[i].charCodeAt() > 90) {
        resultMessage += upperMessage[i];
        continue;
      }
      resultMessage += String.fromCharCode(((upperMessage[i].charCodeAt() + upperKey[indexKey].charCodeAt() - 130) % 26) + 65);
      indexKey ++;

      if (indexKey % upperKey.length === 0) {
        indexKey = 0;
      } else {
        indexKey = indexKey; 
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

    let upperKey = key.toUpperCase();
    let resultEncryptedMessage = ``;
    let indexKey = 0;

    for (let i = 0; i <= encryptedMessage.length - 1; i++) {
      if (encryptedMessage[i].charCodeAt() < 65 || encryptedMessage[i].charCodeAt() > 90) {
        resultEncryptedMessage += encryptedMessage[i];
        continue;
      }
      
      resultEncryptedMessage += String.fromCharCode(((encryptedMessage[i].charCodeAt() - upperKey[indexKey].charCodeAt() + 26) % 26) + 65);
      indexKey++;
      
      if (indexKey % upperKey.length === 0) {
        indexKey = 0;
      } else {
        indexKey = indexKey;
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
