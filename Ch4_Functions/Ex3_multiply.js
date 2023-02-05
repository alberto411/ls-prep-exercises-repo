function multiply(number1, number2) {
  return number1 * number2;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let number1 = getNumber('Enter the first number: ');
let number2 = getNumber('Enter the second number: ');
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
