let p1: string[]= ['safwan', 'ahmed', 'safoo', 'yasir'] // only store one type of data in array i,e, string
let rollNo: number[] =[125,236,152,2369,2323,]// only one type of data in array i,e, number
let bollean: []= []
// only single type of value they hold //
// acessing the properties of the array
console.log(p1);// will print all in array for more excersise see safwan ts q6,q7,q8,q9,....
console.log(rollNo);// will print all in array for more excersise see safwan ts q6,q7,q8,q9,....

// to hold multiple of data in it we use OBJECT called DATA STRUCTURE, stores multiple values in arrays//
// example name age location roll number etc....
//OBJECT is a key value pair where each key (also known as property) is associated with a value//
//defineing a basic object in typrscript
let p2 = {name: "safwan"};
// acessing the properties of the object 
console.log(p2.name);  // print will be name 

// creating type annotation means adding key so we can access later
// defining a basic object in typescript

let person: {name:string;}={
    name: "safwan",
};
console.log(person.name);// one property define the name will be string no other than 

//in array multiple values are stored example
let p6= ['safoo', 45, 'developer',];
// see above statement safoo is not name its nick name, 45 is not age its roll number and developer its hobby not address//
//multiple value stored in array but not define whats is what at [0] [1] and [2]
//special data structure created called OBJECT every thing defined

let p3:{
    name1:string;
    age:number;
    address:string;                 // these three proprties created
}={
    name1:"safwan",
    age:39,
    address:"6/330",
};
console.log(p3.age);// many properties or keys defines with values can be acess one by one this is object
p3.age=18;// modifying object property
console.log(p3.age);
//p3.email//try to add new property error will be there.
console.log(p3.address);

// if we wanted to add more data of different person so the propery we have created that is name age address for diiferent person
//so no need to define the same property many times just acess it see exampole below called type alias
// if alias not defined called anounymous type//
type p4 = { 
    name1:string;
    age?:number;           // ? indicates it is optional, if value not assigned no error see user4
    address:string;       // in type structure ends with semicolon
};
let User1: p4 = {
    name1: "ameen alam",
    age:45,                         // in key values pairs ends with comma
    address: "governor house",
};
let User2: p4 = {
    name1: "yasir",
    age:40,
    address: "pia",
};
let User3: p4 = {      // here p4 is type alias creted above
    name1: "reeha",
    age:40,
    address: "north nazimabad",
};
let User4: p4 = {      
    name1: "reeha",
    address: "north nazimabad",
};


console.log(User3.name1);
User2.age = 55;        //here we modified the age of user2
console.log(User3.age);
console.log(User2.age);
// here we can use for-in loop  to print


/*
=>TYPE ALIAS