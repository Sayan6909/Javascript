const myArray=[0, 1 ,2 , 3, 4,5]

const myheroes= ["ironman", "shaktiman", "hulk" ]

const myArray2=new Array(1,2,3,4) 

// console.log(myArray[1]);


// Array methods
// myArray.push(6)   //to add the value in array
// console.log(myArray);
// myArray.pop() //  remove the last value in array
// myArray.unshift(9); //used to add value to the 0th index of the array
// myArray.shift();



// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArray=myArray.join()  //converts into string

// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// Slice and Splice

console.log("A",myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);

console.log("B",myArray);

const myn2=myArray.splice(1,3)
console.log("C",myArray);
console.log(myn2);