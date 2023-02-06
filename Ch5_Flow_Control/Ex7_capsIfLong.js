function capsIfLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsIfLong('hello world'));
console.log(capsIfLong('goodbye'));
console.log(capsIfLong('this string is so long'));
console.log(capsIfLong('so short'))
