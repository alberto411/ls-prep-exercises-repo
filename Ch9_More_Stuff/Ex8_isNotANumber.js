function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(null)); // false
console.log(isNotANumber(50)); // false
console.log(isNotANumber(undefined)); // false
console.log(isNotANumber(NaN)); // true
