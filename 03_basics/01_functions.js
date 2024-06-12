
function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");

}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2

}
// addTwoNumbers(3,4)

const result= addTwoNumbers(3,4)

// console.log("Result:", result);

function logInusername(username){

    if(username===undefined){
        console.log("Please Enter Username")
        return

    }
    return `${username} justloggedIn`

}

// console.log(logInusername())


//...=> rest operator
function calculateCartprice(val1, val2,...num1){
    return num1

}
// console.log(calculateCartprice(200, 400, 500, 600))

const user={
    username:"sayan",
    price:999
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

handleObject({
    username:"Sayan",
    price: 1299

})

const myNewarry=[200,300,400,500]

function returnSecondVal(getArray) {
    return getArray[2]
}

// console.log(returnSecondVal(myNewarry));
console.log(returnSecondVal([200,300,400,500]));
