// if
// <, >, <=, >=, ==, !==, ===, !==
// const isLoggedin=true;
// const Teperature=41;


// if(Teperature<=40){
//     console.log("Less than 50 degree");

// }
// else{
// console.log("Temperature is greater tha 50");
// }

// const score=200;
// if(score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);    
// }
// console.log(`User power: ${power}`);

// var is global scope

// const balance=1000
// if (balance>500) console.log("Balance is high"),console.log("Balance is low");

// Implicit scope:- It means we have assumed that there is scope. We can write multiple line but this is very immature and 
// unreadable. This pratice should be generally should be avoided.

// Nesting:-
// if(balance<500){
//     console.log("balance is less 500");
// }
// else if(balance<750){
//     console.log("balance is less 750");
// }
// else if(balance<900){
//     console.log("balance is less 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn=true
const debitCard=true
const loggedInfromGoogle=false
const LoggedInfromemail=true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allowed to Purchase");
}
if(loggedInfromGoogle||LoggedInfromemail){
    console.log("User Logged In");
}

// //

