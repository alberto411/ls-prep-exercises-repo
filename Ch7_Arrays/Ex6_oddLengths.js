let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  // iterate over the strings and transform each string into an integer representing its length
  let lengths = strings.map(function(string) {
    return string.length;
  });
  
  // iterate over the lengths and filter out the even values
  let oddLengths = lengths.filter(function(length) {
    return length % 2 === 1; // This expression will return true for odd values, false for even values
  });
  
  return oddLengths;
  
}

console.log(oddLengths(arr)); // => [1, 5, 3]