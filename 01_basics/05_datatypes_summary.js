// Data types-primitive and not primitive

// Primitive Data-types:7types
// 1. String=>call by value
// 2. Number
// 3. Boolean
// 4. Null
// 5. undefined
// 6. symbol=>to make the value unique
// 7. BigInt

// Dynamically typed or statically typed???
// JS is dynamically typed language which means variable types are determined on runtime

// const score=100;
// const scoreValue=100.3; //No float or decimal data type required
// const isLoggedIn=false;
const outsideTemp=null;
// let userEmail; //undefined if left empty

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id==anotherId);
//return value is not same

const bigNumber=546246489462168498432168496847651689684796n


// Non-primitive Data type or Reference type
// 1. Array
// 2. Objects
// 3. Functions

const heroes=["Ironman", "Hulk", "Wolverine"]
let myObj={

    name:"Sayan",
    age:"33",
}

const myfuction= function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myfuction);
console.log(typeof heroes);