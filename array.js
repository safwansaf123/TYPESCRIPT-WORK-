"use strict";
//In TypeScript, =>ARRAYS are used to store multiple values of the same type in a single variable. 
Object.defineProperty(exports, "__esModule", { value: true });
//Declaring array 
//using [] square bracket methhod:
let p1 = ['safwan', 'ahmed', 'safoo', 'yasir']; // only store one type of data in array i,e, string
let rollNo = [125, 236, 152, 2369, 2323,]; // only one type of data in array i,e, number
let bollean = [];
// only single type of value they hold //
// acessing the properties of the array
console.log(p1); // will print all in array for more excersise see safwan ts q6,q7,q8,q9,....
console.log(rollNo); // will print all in array for more excersise see safwan ts q6,q7,q8,q9,....
console.log(p1[3]); //yasir
//Using the Generic array type method: <>
let fruits = ['Apple', 'Orange', 'Banana'];
let p2 = ['safwan', 'ahmed', 'safoo', 'yasir', "AHMED1"];
let rollNo1 = [125, 236, 152, 2369, 2323,];
//Destructing Arrays:
/*To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich?
No, you only take out the items you would like to use on your sandwich.*/
/*Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items
contained in these.*/
//Destructuring makes it easy to extract only what is needed
const vehicles0 = ['mustang', 'f-150', 'expedition'];
// old ways of destructuring
const car = vehicles0[0];
const truck = vehicles0[1];
const suv = vehicles0[2];
console.log(suv); // expedition
//new ways of destructuring
const vehicles1 = ['mustang', 'f-150', 'expedition'];
const [car1, truck1, suv1] = vehicles1;
console.log(car1); //mustang
//If we only want the car1 and suv we can simply leave out the truck1 but keep the comma: means leave blank
const vehicles2 = ['mustang', 'f-150', 'expedition'];
const [car2, , suv2] = vehicles2;
//Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return [add, subtract, multiply, divide];
}
const [add, subtract, multiply, divide] = calculate(5, 7);
console.log(add); // 12
console.log(divide); //.05714
//example
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
};
myVehicle(vehicleOne);
// old way
function myVehicle(vehicle) {
    let message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
    return message;
}
console.log(myVehicle(myVehicle));
//new way after destructre
const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
};
myVehicle1(vehicleTwo);
function myVehicle1({ type, color, brand, model }) {
    const message1 = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    return message1;
}
console.log(myVehicle1(myVehicle1));
//example
const vehicleThree = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
};
myVehicle3(vehicleThree);
function myVehicle3({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    return message;
}
console.log(myVehicle3(myVehicle3));
const student = {
    firstName: "safoo",
    secondName: "ahmed",
    rollNo: 366806,
    email: "safwan_saf@ymail.com",
    isOnsiteAllowed: "true",
};
// convert above data into array just place [] before {}
const student1 = [{
        firstName: "safoo",
        secondName: "ahmed",
        rollNo: 366806,
        email: "safwan_saf@ymail.com",
        isOnsiteAllowed: "true",
    }];
// if we want create for 20 students it will be difficult so in array we wiil create
// so data in {} curly brackets will be consider as [0,1,2,3,4,5,6]
const person = [
    {
        firstName: "safoo",
        secondName: "ahmed",
        rollNo: 366806,
        email: "safwan_saf@ymail.com",
        isOnsiteAllowed: "true",
        entryTest: {
            isPassed: true,
            obtainedMarks: 500,
            totalMarks: 600
        }
    },
    {
        firstName: "safoo1",
        secondName: "ahmed1",
        rollNo: 3668061,
        email: "safwan_saf@hotmail.com",
        isOnsiteAllowed: "true",
        entryTest: {
            isPassed: true,
            obtainedMarks: 400,
            totalMarks: 600
        }
    },
    {
        firstName: "ahmer",
        secondName: "mustafa",
        rollNo: 369806,
        email: "ahmer@ymail.com",
        isOnsiteAllowed: "true",
        entryTest: {
            isPassed: true,
            obtainedMarks: 300,
            totalMarks: 600
        }
    },
    {
        firstName: "zafar",
        secondName: "khan",
        rollNo: 366706,
        email: "zafar@ymail.com",
        isOnsiteAllowed: "false",
        entryTest: {
            isPassed: false,
            obtainedMarks: 200,
            totalMarks: 600
        }
    },
    {
        firstName: "zafar",
        secondName: "khan",
        rollNo: 366706,
        email: "zafar@ymail.com",
        isOnsiteAllowed: "false",
        entryTest: {
            isPassed: false,
            obtainedMarks: 200,
            totalMarks: 600
        }
    },
];
