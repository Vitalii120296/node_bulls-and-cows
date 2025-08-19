'use strict';
/* eslint-disable no-console */

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  const number = new Set(userInput);

  if (number[0] === 0) {
    return false;
  }

  console.log(number);

  return !!(+userInput > 999 && number.size === 4);
}

module.exports = {
  checkIsValidUserInput,
};
