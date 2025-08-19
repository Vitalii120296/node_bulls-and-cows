'use strict';

/* eslint-disable no-console */
/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  const number = [];

  while (number.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!number.includes(randomNumber) && randomNumber !== 0) {
      number.push(randomNumber);
    }
  }
  console.log(+number.join(''));

  return +number.join('');
}

module.exports = {
  generateRandomNumber,
};
