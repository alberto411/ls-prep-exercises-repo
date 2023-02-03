const NAME = 'Victor';
console.log('Good Morning, ' + NAME); // Outputs "Good Morning, Victor" to the console
console.log('Good Afternoon, ' + NAME); // Outputs "Good Afternoon, Victor" to the console
console.log('Good Evening, ' + NAME); // Outputs "Good Evening, Victor" to the console

NAME = 'Joe'; // Results in an error because constants cannot be reassigned
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);
