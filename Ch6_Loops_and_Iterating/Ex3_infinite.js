let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// This code causes an infinite loop because counter is reassigned to 1
// each time on line 3 (counter = 1),
// so this expression always returns a truthy value.