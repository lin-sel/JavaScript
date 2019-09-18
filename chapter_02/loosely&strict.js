
// Loosely Comparison 

let myAge = 25;

console.log(myAge == 25);
// Output: true;

console.log(myAge == '25');
// Output: true   -----Because javascript use loosely type checking with == Operator. 


// Strict Comparison

let myheight = 5.7;

console.log(myheight === '5.7');

console.log(myheight === 5.7);