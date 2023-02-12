let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter(function(value) {
    return Number.isInteger(value); // Returns true if number is integer; otherwise, false.
  })
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
