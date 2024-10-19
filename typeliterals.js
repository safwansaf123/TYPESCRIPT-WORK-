"use strict";
//storing varaibles in restricted manners or specific value called TYPE LITERALS or stricting the user to that value 
Object.defineProperty(exports, "__esModule", { value: true });
let shirtSize; // separated by pipes
shirtSize = 'small';
shirtSize = 'extralarge'; // error size not mentioned
let shirtSize2;
shirtSize2 = 55;
shirtSize2 = 54; // error size not mentioned
let drinkSize;
drinkSize = '250ml'; // no error
drinkSize = '550ml'; // error because in above menue there is no 550
let animal1;
animal1 = "dog"; // ok//
animal1 = "pig"; // compiler is not happy //
const pet1 = "dog"; // ok//
const pet2 = "pig"; // compiler is happy //
// variable can be stored in two type example number and string called union
// union in maths two things write adds or mila k likhna or AS ONE UNIT LIKE STRENGTH TO WEIGHT RATIO//
//ONE ENTITY//
let age;
age: 39; //no error
age: "thirty nine"; //no error
//example
let age2;
age2 = "thirty nine";
if (typeof age2 === "string")
    console.log(age2.toUpperCase());
else
    (typeof age2 === 'number');
console.log(age2);
let myPia = {
    ceo: true, // yes
    employee: true, //yes
    supervisor: true, //yes
    sweeper: true, //yes
}; // all properties are written no error if one property not wriiten there will error see below
// all are intersected of person and person1
let Emirates = {
    ceo: true,
    employee: true,
    supervisor: true,
}; // one value not written see error on emirates
console.log(myPia.employee); // here we acces one property of myPia it will print true means there
console.log(Emirates.sweeper); // here it will say undefined becuse no property mentioned of sweeper
