"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AircraftType;
(function (AircraftType) {
    AircraftType[AircraftType["B777"] = 0] = "B777";
    AircraftType[AircraftType["A320"] = 1] = "A320";
    AircraftType[AircraftType["ATR42"] = 2] = "ATR42";
    AircraftType[AircraftType["DC10"] = 3] = "DC10";
    AircraftType[AircraftType["ATR72"] = 4] = "ATR72";
})(AircraftType || (AircraftType = {}));
;
let myAircraft = AircraftType.B777;
console.log(myAircraft); // answer will be 0 beacuse [0],[1],[2] alreday define by enum first value to second value to 1 like array
// After compilation of enum blue print of enum will be the part of java script see enums.js you will see script of enum in js
//enum is not the part of javascript it is the part of typescript against enum there is code behind it in java
//ENUM was the part of c++ and other language so it was added in typescript 
//enum was adopted by someone it is useless we can drop it
// After compilation of typeliteral  blue print additional lines of code of typeliteral not there.
var AircraftType1;
(function (AircraftType1) {
    AircraftType1["B777"] = "B777";
    AircraftType1["A320"] = "A320";
    AircraftType1["ATR42"] = "ATR42";
    AircraftType1["DC10"] = "DC10";
    AircraftType1["ATR72"] = "navy"; //[4]
})(AircraftType1 || (AircraftType1 = {}));
;
let myAircraft1 = AircraftType1.B777;
console.log(myAircraft1); // answer will be B777 BECUASE VALUE ASSINGNED.
let myAircraft2 = AircraftType1.ATR72;
console.log(myAircraft2); // answer will be NAVY BECUASE VALUE ASSINGNED.
//reverse mapping in enum 
var love;
(function (love) {
    love[love["urooj"] = 0] = "urooj";
    love[love["rimsha"] = 1] = "rimsha";
    love[love["noora"] = 2] = "noora";
    love[love["mehwish"] = 3] = "mehwish";
    love[love["any"] = 4] = "any";
})(love || (love = {}));
console.log(love[0]);
console.log(love[3]);
//CONST ENUM was introduce later to remove script in java and it doesnot support reverse mapping
