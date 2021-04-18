console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
let partsNeeded = 40;

console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3,5,-6,0,7,11];
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:', supplyChanges[2]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:', supplyChanges.pop());

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.'
console.log('6. Showing supplyChanges...');

for (let i = 0; i <= supplyChanges.length; i++) {
  if (supplyChanges[i] > 0) {
    console.log('Added', supplyChanges[i], 'parts.');
  }
  else if (supplyChanges[i] < 0) {
    console.log('Part count', supplyChanges[i]);
  }
  else {(supplyChanges[i] === 0);
    continue;
  }
}


// for in loop
console.log('6.a For/in version'); // trying out for in loop

for (let i in supplyChanges) {
  if (supplyChanges[i] > 0){
    console.log('Added', supplyChanges[i], 'parts');
  }
  if (supplyChanges[i] === 0){
    continue;
  }
  if (supplyChanges[i] < 0){
    console.log('Part count', supplyChanges[i]);
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

for (let number of supplyChanges) {
  if (number > 0){
    console.log('Added', number, 'parts');
  }
  if (number === 0){
    continue;
  }
  if (number < 0){
    console.log('Part count', number);
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
let x = 0;
while (x<supplyChanges.length){
  if (supplyChanges[x] > 0){
    console.log('Added', supplyChanges[x], 'parts.');
  }
  else if (supplyChanges[x] < 0){
    console.log('Part count', supplyChanges[x]);
  }
  x++;
}


// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.

let sum = 0;

for (let i=0; i<supplyChanges.length; i++){
  sum += supplyChanges[i];
}
console.log('9. Total supplies available is:', sum);
