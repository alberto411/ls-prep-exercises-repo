let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// Outputs "bar" to the console because it is initialized in the global scope.
// foo is initialized to "qux" on line 3, but it is an inner block scope - so it is ignored