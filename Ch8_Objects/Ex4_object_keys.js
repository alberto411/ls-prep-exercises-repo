let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objectKeys = Object.keys(obj);
let uppercaseKeys = objectKeys.map(key => key.toUpperCase());

console.log(uppercaseKeys);
console.log(obj);
