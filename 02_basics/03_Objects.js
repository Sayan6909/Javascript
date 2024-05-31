//Singleton Object

//object literals
// Object.create       //contructor 

const my_symbl=Symbol("key1")

const js_user={
    name:"sayan",
    age:33,
    // my_symbl:"key1",
    [my_symbl]:"key1",

    location:"Indore",
    email:"sayan@gmail.com",
    is_Logged_in:false,
    last_Login_days:["Monday","Saturday"]
}

// console.log(js_user.email);
// console.log(js_user["email"]);  //.not required for if it is given as a string
// console.log(js_user.my_symbl);
// console.log(typeof js_user.my_symbl);
// console.log(js_user[my_symbl]);
// console.log(typeof js_user[my_symbl]);

js_user.email="sayan@99acres.com";
// Object.freeze(js_user)

js_user.email="sayan@chatgpt.com"

// console.log(js_user);

js_user.greeting=function(){
    console.log("Hello Js User");
}

console.log(js_user.greeting());

js_user.greeting2=function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(js_user.greeting2());
