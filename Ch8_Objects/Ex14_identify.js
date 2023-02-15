function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables: hello, greeting, name, xyzzy, howdy, foo

// Object property names: a, b, c, d
// *Note that array indexes in [3, 4, 5] are also property names: 0, 1, 2

// Primitive values: 1, 2, 3, 4, 5, ' ', 'Hi', 'Grace'
// *Note the object property names are also primitive values: a, b, c, d, 0, 1, 2

// Objects:
// { a: 1, b: 2, c: [3, 4, 5], d: {} }
// [3, 4, 5]
// {}
// *Note that the functions hello() and xyzzy() are also objects