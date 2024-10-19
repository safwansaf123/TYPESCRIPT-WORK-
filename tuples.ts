//TUPLES//
// A tuple is defined by specifying the types of its elements in a specific order//
//In TypeScript, tuples are a special type of array that allows you to define the types of elements at specific positions.//
//Tuples are great because they allow each element in the array to be a known type of value.

let ipad:[string,number,boolean];
ipad=["american", 13, true];

// in above case if we change the order it will not accept
ipad=[13,"american",true]   //you will see error


//A tuple is a TYPED-ARRAY with a pre-defined length and types for each index.
//pre-defined length[string, string, number, number ] means 2 string values and 2 number values
// tuples elements can be accessed using index number
console.log(ipad[0]); //american
console.log(ipad[1]); //13

//READ-ONLY TUPLES: You can make tuples readonly to prevent modification
let readonlyTuple: readonly [number, string] = [1, "TypeScript"];
readonlyTuple[0] = 2; // Error: Cannot assign to '0' because it is a read-only property.
// read only means now you can't change its value at index [0] see error above
console.log(readonlyTuple);//

ipad[0]="pakistani";  // here value changed beacuse it is simple tuple


/*NAMED-TUPLES is a subclass of tuples that allows you to access its elements using named fields,
instead of numerical indices. This makes your code more readable and self-documenting.*/
//You can provide names for the elements to give more context  (also known as a labeled tuple) 
// Define a named tuple for a 2D point

type Point = [x: number, y: number];

// Create an instance of the named tuple
let point: Point = [10, 20];

// Access the elements using their names
let xCoordinate = point[0]; // 10
let yCoordinate = point[1]; // 20

//provide more context for what our index values represent.
//In this example, x and y are the names given to the elements of the tuple. 
//While you still access the elements by their index, the names provide better context when you hover over them in your editor
//EXAMPLE OF NAMED TUPLES
type Location = [latitude: number, longitude: number];

const location: Location = [40.7128, -74.0060];

const latitude = location[0]; // 40.7128
const longitude = location[1]; // -74.0060



//Destructuring: Since tuples are arrays, you can destructure them





