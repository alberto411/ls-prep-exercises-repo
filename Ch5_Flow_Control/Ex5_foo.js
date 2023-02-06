return foo() ? 'bar' : qux();

// Refactor into an 'if' statement:

if (foo()) {
  return 'bar';
} else {
  return qux();
}