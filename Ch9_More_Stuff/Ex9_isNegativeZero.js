function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(-0)); // true
