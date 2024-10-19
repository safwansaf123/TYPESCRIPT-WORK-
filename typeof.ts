/*
TYPEOF tool or operator used to find out the type of a given value or variable. Here's a basic example.
it tells you what type of data you're dealing with.
*/

console.log(typeof 3); //number
console.log(typeof 'safoo'); //string
console.log(typeof true); // booleean
console.log(typeof TextDecoderStream); // function
console.log(typeof []);  // object
console.log(typeof {}); // object
console.log(typeof [1,2,95, 'safoo']); // object
console.log(typeof [ 8 | 8]); // object
console.log(typeof WebGL2RenderingContext); // undefined



let person1:{
    name1 : string;
    age : number;
    address : string;
}={
    name1: 'safoo',
    age: 45,
    address: '6/330 liaquatabad',
}
console.log(typeof person1);// object

enum AircraftType1{
    B777, 
    A320 ,
    ATR42 ,
    DC10 ,
    ATR72 ,
};

console.log(typeof AircraftType1); // object

function greet() {
    return "Hello, World!";
  }
  console.log(typeof greet); // "function"