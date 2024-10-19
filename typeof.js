"use strict";
/*
TYPEOF tool or operator used to find out the type of a given value or variable. Here's a basic example.
it tells you what type of data you're dealing with.
*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log(typeof 3); //number
console.log(typeof 'safoo'); //string
console.log(typeof true); // booleean
console.log(typeof TextDecoderStream); // function
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof [1, 2, 95, 'safoo']); // object
console.log(typeof [8 | 8]); // object
console.log(typeof WebGL2RenderingContext); // undefined
let person1 = {
    name1: 'safoo',
    age: 45,
    address: '6/330 liaquatabad',
};
console.log(typeof person1); // object
var AircraftType1;
(function (AircraftType1) {
    AircraftType1[AircraftType1["B777"] = 0] = "B777";
    AircraftType1[AircraftType1["A320"] = 1] = "A320";
    AircraftType1[AircraftType1["ATR42"] = 2] = "ATR42";
    AircraftType1[AircraftType1["DC10"] = 3] = "DC10";
    AircraftType1[AircraftType1["ATR72"] = 4] = "ATR72";
})(AircraftType1 || (AircraftType1 = {}));
;
console.log(typeof AircraftType1); // object
function greet() {
    return "Hello, World!";
}
console.log(typeof greet); // "function"
