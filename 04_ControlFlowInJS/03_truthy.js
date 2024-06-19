const userEmail=[]

if(userEmail){
    console.log("Got user email");

}
else{
    console.log("Dont have user email");
}

// false, 0, -0, BigInt 0n, "", null, undefined, Nan=> These all are falsy Values
// true, "0", 'false', " ", [], {}, function(){}=>these all are truthy values

// if(userEmail.length===0){
//     console.log("Array is empty")
// }

const empObj={}

if(Object.keys(empObj).length===0){
    console.log("object is empty")

}
// Nullish Coalecing operator(??)

 let val1;
// val1=5??10;
// val1=null??10
// val1=undefined??15

val1=null??10??15
console.log(val1);

//Ternary Operator

// condition?true:false

const price=100;
price<=80?console.log("Less than 80"):console.log("More than 80");


