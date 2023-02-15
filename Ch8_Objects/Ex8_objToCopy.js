let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keysArray) {
  let targetObject = {};
  
  if (keysArray) { // See if keys argument is provided === `true`
    keysArray.forEach(function(key) { // Iterates through each key
      targetObject[key] = sourceObject[key]; // Initialize a new object property to sourceObject
    });
  } else {
    Object.assign(targetObject, sourceObject);
  }
  
  return targetObject;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

console.log(objToCopy);
