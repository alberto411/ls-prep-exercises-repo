let array = [3, 5, 7];

function sumOfSquares(numbers) {
  numbers.reduce(function(sum, number) {
    return sum + number * number;
  }, 0);
  
}

console.log(sumOfSquares(array)); // => 83
