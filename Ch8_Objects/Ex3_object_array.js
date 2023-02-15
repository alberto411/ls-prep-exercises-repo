let myArray = {
  0: 'Brian',
  1: 'Miles',
  2: 'Dave',
  length: 3, // Defines the length property to be used in the `for` loop
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
