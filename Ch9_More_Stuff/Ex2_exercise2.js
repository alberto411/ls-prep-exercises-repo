$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
    
    // Line 2 shows the absolute path of the file that raised the exception, on line 4
    // Line 3 points out that there is a possible error at the greeting argument for console.log -> greeting
    // Line 6 indicates the error type (ReferenceError) and the error message
    // Line 7 indicates that the error was detected in the hello function - on line 4, column 15
    // Line 8 indicates where the hello function was called within the global scope - on line 13, column 1
    // ananymous -> used to indicate the top (global) level of the program