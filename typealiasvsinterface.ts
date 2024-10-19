// type 
type Human = {
    name: string 
    legs: number 
    head: number
  }
  
  // interface 
  interface Human3 {
    name: string 
    legs: number 
    head: number
  }

/*
Key difference: interfaces can only describe object shapes. Type aliases can be used for other types such as primitives, unions and tuples
A type alias is quite flexible in the data types you can represent. From basic primitives to complex unions and tuples as shown below:
*/

// primitives 
type Name = string 

// object 
type Male = {
  name: string
}

type Female = {
  name: string 
}

// union
type HumanSex = Male | Female

// tuple
type Children = [Female, Male, Female]

/* Key difference: interfaces can be extended by declaring it multiple times, means forget to write legs can be added like this*/

interface Human1 {
    name: string 
  }
  
  interface Human1 {
    legs: number 
  }
const person1: Human1 ={
name: 'safoo',
legs: 5,
}
console.log(person1);
//the above statement can be written as//
  /*
  interface Human {
  name: string 
  legs: number 
}
*/