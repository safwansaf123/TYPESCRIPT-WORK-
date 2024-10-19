"use strict";
//HOISTING=>
/*In JavaScript, hoisting refers to the behavior where variable and function declarations are moved to the top of their
containing scope during the compilation phase. This means you can use variables and functions before they are declared in the code.*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log(x); // giving "undefined" because, before declaring variable we have consoled in case of var
var x = 10;
console.log(x); // 10
console.log(a); // giving "refrence error" because, before declaring variable we have consoled in case of let, called temporal dead zone
let a = 10;
console.log(a); //10
console.log(s); // giving "refrence error" because, before declaring variable we have consoled in case of let, called temporal dead zone
const s = 38;
console.log(s); //38
//FUNTION HOISTING
//function hoisting in function exprerssion or in anounymous function 
console.log(myFunction()); //giving "Type error" because, before declaring function we have consoled in case of var or anounymous function 
var myFunction = function () {
    return "safwan ahmed";
};
//function hoisting in function declaration
console.log(hoistedFunction()); // This works because of hoisting // safoo
function hoistedFunction() {
    return "safoo";
}
hoistedFunction1(); // This works because of hoisting
function hoistedFunction1() {
    console.log("This function is hoisted!");
}
