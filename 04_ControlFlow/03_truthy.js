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
