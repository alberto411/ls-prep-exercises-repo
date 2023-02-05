function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// Result: The console will output:
// 42
// 3.1415

// Third argument in foo function invocation is ignored
// because foo only requires 2 parameters.