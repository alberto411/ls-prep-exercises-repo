let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// Result: 1 is displayed to the console because line 7
// logs the variable bar based on the global scope declared on line 1
// On line 3 bar is set to 2, but since this is an inner scope
// the console.log method on line 7 ignores this initialization