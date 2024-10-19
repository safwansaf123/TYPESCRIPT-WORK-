"use strict";
//is a tecnique where a single function name can represent multiple function definations that differs in their prameters or return type
//other definations after defining function and its signatures,
//typescript uses these overloaded function signatures to to select the appropiate implementation based on how the function in invoked or called
Object.defineProperty(exports, "__esModule", { value: true });
//three signatures are created
//now function invoked or called of any 
function on(arg1, arg2) {
    return arg1 + arg2;
}
; // here any doesnt mean that any type anything her any means data will from above statement//
console.log(on('safwan', 'ahmed'));
console.log(on(1, 2));
console.log(on(true, false)); // (here true = 1 and false=0) = 1+0=1
console.log(on(false, false)); // 0+0 = 0
console.log(on(true, true)); // 1+1=0
console.log(on("safwan", false)); // from the above signature there is no combination of string and boolean
// another example
/*function on1(arg3: string, arg4: string): string;
function on1(arg3: number, arg4: number): number;
function on1(arg3: boolean, arg4: boolean): boolean;
//three signatures are created*/
//now function invoked or called in form of union
// but system dont know which type will come from the above signatures so here we need  NARROWING, we have to define typeof
function on1(arg3, arg4) {
    if (typeof arg3 === "string" && arg4 === "string")
        return arg3 + arg4; // here called in form of string
    if (typeof arg3 === "number" && arg4 === "number")
        return arg3 + arg4; // here called in form of number
    if (typeof arg3 === "boolean" && arg4 === "boolean")
        return arg3 + arg4; // here called in form of boolean
}
console.log(on1("safoo", "ahmed"));
console.log(on1(1, 2));
//two signatures are created
//invoked function 
function length(x) {
    return x.length;
}
;
