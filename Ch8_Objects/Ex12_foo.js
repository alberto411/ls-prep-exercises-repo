function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo; // Initialize a bar variable with a reference to foo

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
