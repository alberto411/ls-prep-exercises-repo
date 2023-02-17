function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// What does this code do?
// split - divides a string into an array of substrings (based on words separated by ' ')
// reverse - reverses the order of the list of substrings (words)
// map - iterates over each element in the calling array and passes each one into the callback function
// Result: creates a new array containing the length of each word in reverse order

console.log(doSomething('hello world')); // => [5, 5]
console.log(doSomething('let us go there now')); // => [3, 5, 2, 2, 3]
console.log(doSomething('under maintenance')); // => [11, 5]
