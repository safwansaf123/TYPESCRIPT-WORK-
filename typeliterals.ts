 //storing varaibles in restricted manners or specific value called TYPE LITERALS or stricting the user to that value 

 let shirtSize: 'small' | 'medium' | 'large' ; // separated by pipes
 shirtSize = 'small';
 shirtSize= 'extralarge';   // error size not mentioned

 let shirtSize2: 55 | 66 | 77 ;
shirtSize2 = 55;
shirtSize2 = 54;  // error size not mentioned

 let drinkSize: '250ml' | '350ml' |  '450ml' ;

 drinkSize = '250ml' // no error
 drinkSize = '550ml' // error because in above menue there is no 550

let animal1:"dog" |"pig";
animal1 = "dog"   // ok//
animal1 = "pig"  // compiler is not happy //

type animal = "dog" |"pig";
const pet1:animal = "dog"   // ok//
const pet2:animal = "pig"  // compiler is happy //



 // variable can be stored in two type example number and string called union
 // union in maths two things write adds or mila k likhna or AS ONE UNIT LIKE STRENGTH TO WEIGHT RATIO//
 //ONE ENTITY//

 let age: number | string ;
 age: 39                    //no error
 age: "thirty nine"         //no error
 //example
  let age2: number | string;
 age2 = "thirty nine"      

 if (typeof age2 === "string")
    console.log(age2.toUpperCase()); 
else (typeof age2 === 'number')
console.log(age2); 
 
 // in type literal and union both are separated by pipe differnce is in literal we store actual value and in union we defined its property//

 /*
 =>INTERSECTION combine multiple types into one , merging , add , combine
 //will have all the properties of all the types it intersects
// using the and operator & example CEO and employee*/

type person = {
    ceo: boolean;    //yes or no
    employee: boolean;    //yes or no
 }

 type person1 = {
    supervisor: boolean;   // yes or no
    sweeper : boolean;     // yes or no
 }

 type superPerson= person & person1;
 
 let myPia : superPerson = {
ceo: true,                      // yes
employee: true,                 //yes
supervisor: true,               //yes
sweeper: true,                  //yes
 }   // all properties are written no error if one property not wriiten there will error see below
 // all are intersected of person and person1

 let Emirates : superPerson = {
    ceo: true,
    employee: true,
    supervisor: true,
 }   // one value not written see error on emirates

 console.log(myPia.employee); // here we acces one property of myPia it will print true means there
 console.log(Emirates.sweeper);// here it will say undefined becuse no property mentioned of sweeper