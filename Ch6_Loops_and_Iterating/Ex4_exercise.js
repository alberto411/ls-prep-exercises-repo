for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// for loop components: Initializer - Conditional - Increment

// Although the "Increment" component of the for loop is missing,
// the for loop is still incremented on line 2 (within the console.log method call)
// so the code executes without an error.