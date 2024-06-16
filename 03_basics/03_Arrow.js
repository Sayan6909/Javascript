const user={
    username:"Sayan",
    price:999,

    welcomeMessage:function() {

        // console.log(`${this.username},Welcome to the Website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username="Neha"
// user.welcomeMessage()
// //  console.log(this);


// function random(){

//     let username="Sayan"
//     console.log(this.username);
// }
// random()

// const random= function(){
//     let username="Sayan"
//     console.log(this.username);
// }

// const random= ()=>{
//     let username="Sayan"
//     console.log(this);
// }
// random()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// Implicit return:-

// const addTwo=(num1,num2)=>num1+num2

// If we use curly bracket then we have to use return keyword other wise for parenthesis there is no
// requirement to write the return keyword

// const addTwo=(num1,num2)=>(num1+num2)

const addTwo=(num1,num2)=>({username:"Sayan"})


console.log(addTwo(3,4));
