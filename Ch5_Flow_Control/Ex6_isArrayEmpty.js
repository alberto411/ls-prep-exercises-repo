function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// 'Not Empty' is output to the console
// The function is invoked with an empty array as an argument -
// Although the array is empty, it is a truthy value that evaluates to true,
// so 'Not Empty' is output.