// Memory=> 2 types
// Stack type Memory=>primitive data types; copy of the value
// Heap Type Memory=>Non-Primitive data type; refernece of original value

let myGitname="Sayan6909"
anothername="shaun.mukherjee92@gmail.com"

console.log(myGitname);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo=userOne

userTwo.email="sayan@google.com"

console.log(userOne.email);
console.log(userTwo.email);