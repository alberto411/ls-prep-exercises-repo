function multiply(left, right) { // Variables: multiply, left, right
  let product = left * right; // Variables: product, left, right
  return product; // Variable: product
}

function getNumber(prompt) { // Variables: getNumber, prompt
  return parseFloat(question(prompt)); // Variables: parseFloat, question, prompt
}

let left = getNumber('Enter the first number: '); // Variables: left, getNumber
let right = getNumber('Enter the second number: '); // Variables: right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); // Variables: console, left, right, multiply

// Exercise 10:
// Global variables: multiply, getNumber, console, parseFloat, question
// Local variables: left, right, product, prompt

// Exercise 11:
// Are left and right variables on lines 1-2 the same as 10-12?
// No:
// Line 1: left and right are parameters
// These functions shadow the variables set on lines 10 and 11
// Line 2: left and right are local variables inside the multiply function
// Lines 10 & 11: left and right are global variables
