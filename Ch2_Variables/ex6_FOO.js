const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
// Result: "bar" is output to the console - there is no error
