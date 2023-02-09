function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0; // Declare 'tries' variable and initialize it to 0
let result; // Declare the 'result' variable without actually initializing it

do {
  result = randomNumberBetween(1, 6); // Declare variable 'result' and initalize it to a value of calling the randomNumberBetween function
  tries += 1; // Increment 'tries' variable by 1
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');