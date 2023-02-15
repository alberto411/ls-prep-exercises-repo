let foo = { // foo is declared and initialized to an object literal
  a: 'hello',
  b: 'world',
};

let qux = 'hello'; // qux is declared and initialized to a string value 'hello'

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
// Outputs "hi" to the console because the value assigned to the 'a' property on line 1 is mutated upon reassignment (line 9),
// so for property 'a' - 'hello' is replaced with 'hi'
console.log(qux);
// Outputs 'hello' (the initial value on line 6) because a string is a primitive value
// that is therefore immutable