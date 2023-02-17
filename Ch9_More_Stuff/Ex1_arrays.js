let array1 = [1, 2, 3]; // Declare and initialize array1 to an array literal
let array2 = array1 // array2 contains a reference/pointer to the same [1, 2, 3]
array1[1] = 4; // Reassign the element at index 1 (2 -> 4)
console.log(array2); // array2 also displays the same mutated array because it references the same value as array1

// This code logs [1, 4, 3] to the console
