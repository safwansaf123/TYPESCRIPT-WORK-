//PROMISE//
/* Like in real life it fullfills or not true or not*/
//works as an object and uses arrow function

//SYNTAX//
/*
Let promise = new promise((resolve,reject) => {...});      */
//(resolve, reject) these are two handlers, work as call back function

let promise = new Promise ((resolve,reject) => {
    console.log("i am pakistani");
   resolve("success")
});   // answer will be i am pakistani

let promise1 = new Promise ((resolve,reject) => {
    console.log("i am indian");
   reject("fake")
});   // answer will be error means rejected and (but) msg not printed

//after recject and resolve answer must be printed see below for further 
//.then ()         promise.then(( ) => {...})
//.catch()         promise.catch(( ) => {...})

// using arrow function

const getpromise = () => {
    new Promise ((resolve,reject) => {
        console.log("i am indian");
       reject("fake")
}