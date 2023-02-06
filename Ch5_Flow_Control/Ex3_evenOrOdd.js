function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('The number you entered is not an integer.');
    return; // Stops execution of the function
  }
  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(8); // even
evenOrOdd(11); // odd
evenOrOdd(3.1415) // log 'The number you entered is not an integer.' to the console