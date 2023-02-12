let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i += 1) { // First iterate over the 3 sub-arrays
  for (let j = 0; j < myArray[i].length; j += 1) { // myArray[i] references each sub-array
    let value = myArray[i][j]; // i - outer index; j - inner index
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}