// when comparing 
// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}
  
  let ball: Ball = { diameter: 10 };
  let sphere: Sphere = { diameter: 20 };
  
  sphere = ball;    
  ball = sphere;    
  // both have diameter in number so can be equal or both keys are same i.e diameter not value 
  //in upper case we made ball equal to sphere and vice versa 
  console.log(ball);//10
  console.log(sphere);//10
  // If we add in a type which structurally contains all of
  // the members of Ball and Sphere, then it also can be
  // set to be a ball or sphere.

  // in above case we have define first ball as sphere means equal to 10
  //in above case if we define first sphere as ball so answer will be 20



  interface Tube {
    diameter: number;
    length: number;
  }
  
  let tube: Tube = { diameter: 12, length: 3 };
  
  ball = tube;
  tube = ball;  // cant be equal beucase ball not contian lenght one key is absent that is lenght


// ANOTHER EXAMPLE

let myType = {name: "safoo", id: 1};  // we didnt define its premitive string and number, it inferes 
myType={id:2, name: "zia"};          // here we change data in myType, that its value and position not its key so it accept
myType={name: "saf", id:5, age:56}   // here we add one key it will not accept becuse structure already define in myType in 38
// conculusion is that in structural typing 
//1- it inferes if we dont define
//2-we can change key places or order  number but not the key 
//3-we can change values of key 

// another example 

let xx : {id : number, [v:string]:any};  // here we have define the structure, infere not allowed
xx = {id:3, abc:"safoo"};// here id will be number and [] is array that contain string as key and value will be any
xx={id:3, abc:"safoo", age: 40};// so we have added age 
xx={id:3, abc:"safoo", age: 40, me:"hello"};// here we have added me 

//another example 

let person = {age: 35, name: "safoo", email:"safwan_saf@ymail.com"};  // stale object while writing its fresh if we made another
let person2={age:45, name: "ali"}; // this is fresh object as respect to the above  
person=person2;  //not allow
person2=person;//allowed

