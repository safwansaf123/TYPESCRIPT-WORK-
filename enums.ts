enum AircraftType{
    B777,   //[0]
    A320,   //[1]
    ATR42,  //[2]
    DC10,   //[3]
    ATR72,  //[4]
};

let myAircraft: AircraftType = AircraftType.B777;
console.log(myAircraft);// answer will be 0 beacuse [0],[1],[2] alreday define by enum first value to second value to 1 like array

// After compilation of enum blue print of enum will be the part of java script see enums.js you will see script of enum in js
//enum is not the part of javascript it is the part of typescript against enum there is code behind it in java
//ENUM was the part of c++ and other language so it was added in typescript 
//enum was adopted by someone it is useless we can drop it
// After compilation of typeliteral  blue print additional lines of code of typeliteral not there.

enum AircraftType1{
    B777 = 'B777',   //[0]
    A320 = 'A320' ,  //[1]
    ATR42 = 'ATR42',  //[2]
    DC10 = 'DC10',   //[3]
    ATR72 = 'navy' //[4]
};
let myAircraft1: AircraftType1 = AircraftType1.B777;
console.log(myAircraft1); // answer will be B777 BECUASE VALUE ASSINGNED.

let myAircraft2: AircraftType1 = AircraftType1.ATR72;
console.log(myAircraft2);// answer will be NAVY BECUASE VALUE ASSINGNED.

//reverse mapping in enum 
enum love {
    urooj,
    rimsha,                 //default values for these keys are 0,1,2,3,4
    noora,
    mehwish,
    any,
}
console.log(love[0]);
console.log(love[3]);
//CONST ENUM was introduce later to remove script in java and it doesnot support reverse mapping