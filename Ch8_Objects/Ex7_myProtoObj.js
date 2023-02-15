let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

// Snippet 1 - No, Object.keys returns an array consisting only of the object's own properties,
// so foo and bar - inherited properties - are not included
// Result: only qux will be logged
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// Snippet 2 - The for-in loop iterates through both inherited and own properties
// Result: qux, foo and bar will be logged
for (let key in myObj) {
  console.log(key);
}

