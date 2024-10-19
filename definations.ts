/*
=>TYPESCRIPT = superset of JavaScript.
Think of JavaScript as a circle, and TypeScript as a larger circle that surrounds it.
TypeScript contains all the features of JavaScript, and also adds some additional features 
that make it more powerful and easier to work with.

TypeScript is a statically typed language, follows structural typing
while JavaScript is a dynamically typed language. follows nominal typing


/*
=>VARAIBLES They are the empty containers that store the data, your program uses and manipulates
imagine you have a row of empty boxes, and you want to store various items in them, such as books, pens, and papers.
each variable has a specific type, which determines the kind of data it can store.
TypeScript has several built-in types that you can use when declaring variables called primitives,

=>PRIMITIVE is a basic data type that is used to represent simple data or values. 
Think of them as the building blocks of your code.
1-string for textual data in "" or ''
2-number for both integers (whole numbers) and floating-point numbers (numbers with a decimal point).
3-boolean for typically used in conditional statements and logic operations or yes or no values
4-biginit for large integers, in type script it hold upto 16 for above we use biginit
5-symbol for unique
6-null for indicate that a variable should have no value or that an object property does not exist.
7-undefined for declare a variable without assigning a value, its default value is undefined
8-any means anything will not check 
*/

/*
=>TYPE ANNOTATIONS declare a variable by using const, var, or let, or may be function
you can optionally add a type annotation to explicitly specify the type of the variable:
it could determine it self, it can automatically infer the type of a variable or function without the need for explicit type annotations.
called => TYPE INFERENCE
the method of expressing code exampl let message : string = "safwan"
*/
//example
let message : string = "safwan"   

/* here message is variable empty box and string is permitive and "safwan" is value or data and whole eqaution or code is type anootation */

let data = {message2: "safwan"};
// here key is message2 and safwan is value called key value pair may also called   property of object
/*
=>SIMPLE OR BASIC TYPE ANNOTATION */
let message1 = "hello";

/*
=>TYPE ANNOTATION FOR ARRAY */
let fruits = ["apple", 'banana', 'grapes'];

/*
=>TYPE ANNOTATION FOR ARRAY-LITERALS */
let fruits1: string[] = ["apple", 'banana', 'grapes'];
let code: number[] = [256,2326,23265,2365,89];

const student ={
    firstName: "safoo",
    secondName: "ahmed",
    rollNo: 366806,
    email: "safwan_saf@ymail.com",
    isOnsiteAllowed: "true",
    };
// convert above data into array just place [] before {}
const student1 =[{
    firstName: "safoo",
    secondName: "ahmed",
    rollNo: 366806,
    email: "safwan_saf@ymail.com",
    isOnsiteAllowed: "true",
    }];

/*
=>TYPE ANNOTATION FOR OBJECT */

let name: 'safoo';
    age: 32;
    address: '6/330 liaquatabad';

/*
=>TYPE ANNOTATION FOR OBJECT-LITERALS */

let person1:{
    name1 : string;
    age : number;
    address : string;
}={
    name1: 'safoo',
    age: 45,
    address: '6/330 liaquatabad',
}
/*
=>FUNCTIONS are reusable pieces of code that can be called with specific inputs
(called arguments) to perform a task and return a value
=>TYPE ANNOTATION FOR SIMPLE-FUNCTIONS (function declaration)
starting with the function keyword, followed by the function name, a list of parameters in parentheses, and the function body enclosed in curly braces {}.
*/
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet('safoo')); // Output: 'Hello, safoo!'s

/*
=>TYPE ANNOTATION FOR ANOUNYMOUS-FUNCTIONS (function expression)
another way to create a function, where we define an anonymous function and assign it to a variable.*/

const greet1 = function (name: string): string {
    return `Hello, ${name}!`;
  };
  console.log(greet('safoo'));

/*
=>ANNOTATION FOR TYPE-ALIAS FOR OBJECTS */

type p4 = { 
    name1:string;
    age:number;
    address:string;       // TYPE-ALIAS structure created ends with semicolon
};
let User1: p4 = {
    name1: "ameen alam",            // values added to type alias
    age:45,                         // in key values pairs ends with comma
    address: "governor house",
};
let User2: p4 = {
    name1: "shah",            // values added to type alias
    age:65,                         // in key values pairs ends with comma
    address: "governor house",
};

/*
=>ANNOTATION FOR TYPE-ALIAS FOR LITERALS */


/*
=>ANNOTATION FOR TYPE-ALIAS FOR UNION */


/*
=>ANNOTATION FOR TYPE-ALIAS FOR INTERSECTION */
type person1 = {
    ceo: boolean;    //yes or no
    employee: boolean;    //yes or no
 }

 type person2 = {
    supervisor: boolean;   // yes or no
    sweeper : boolean;     // yes or no
 }

 type superPerson= person1 & person2;
 
 let myPia : superPerson = {
ceo: true,                      // yes
employee: true,                 //yes
supervisor: true,               //yes
sweeper: true,                  //yes
 }; // SEE TYPELITERALS

/*
=>ANNOTATION FOR TYPE-ALIAS FOR FUNCTIONS */
function on(arg1: string, arg2: string): string;
function on(arg1: number, arg2: number): number;
function on(arg1: boolean, arg2: boolean): boolean;
// three types defined
function on(arg1: any, arg2: any): any{
return arg1+arg2
};                                // here any doesnt mean that any type anything her any means data will from above statement//

console.log(on('safwan','ahmed'));

console.log(on(1,2));

console.log(on(true, false));


/*
=>INTERFACES interfaces can only describe object shapes. Type aliases can be used for other types such as primitives, unions and tuples
interfaces can be extended by declaring it multiple times */

interface Human {
  name: string 
  legs: number 
  head: number
}{
name:'safoo'
legs: 25
head:6
}
