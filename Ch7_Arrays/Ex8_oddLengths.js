let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  return strings.reduce(function(newLengths, string) {
    let length = string.length; // Get the length of the current string
    if (length % 2 === 1) { // If the length is an odd number
      newLengths.push(length);
    }
    
    return newLengths;
    
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]