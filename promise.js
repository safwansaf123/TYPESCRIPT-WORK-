"use strict";
//PROMISE//
/* Like in real life it fullfills or not true or not*/
//works as an object and uses arrow function
Object.defineProperty(exports, "__esModule", { value: true });
//SYNTAX//
/*
Let promise = new promise((resolve,reject) => {...});      */
//(resolve, reject) these are two handlers, work as call back function
let promise = new Promise((resolve, reject) => {
    console.log("i am pakistani");
    resolve("success");
});
let promise1 = new Promise((resolve, reject) => {
    console.log("i am indian");
    reject("error");
});
