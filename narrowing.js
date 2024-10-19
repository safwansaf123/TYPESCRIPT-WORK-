"use strict";
/*
=>NARROWING is process of refining the type of a variable based on the information available in the code
provide more accurate type-checking and improve code safety.
make sure that you are using the correct types for your variables, properties, and functions. */
/* typegurad is used for narrowing
example */
Object.defineProperty(exports, "__esModule", { value: true });
let number = 5.2662;
console.log(number.toFixed(2)); // answer 5.27 restricted to 2 values after decimal
//make sure the number is two digit after decimal so we will work so we have to do narrowing//
//here we used tool tofixed for narrowing//
let myVar;
myVar = "Hello, World!"; //make sure the data is string the we will perform function ie is to make it to uppercase
if (typeof myVar === "string") {
    console.log(myVar.toUpperCase()); // This is safe because TypeScript knows myVar is a string
}
;
function displayResult(result) {
    console.log(result); // want result in both number and string 
}
displayResult(42); // Output: 42
displayResult("hello"); // Output: hello
