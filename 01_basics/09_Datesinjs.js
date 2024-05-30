// Dates

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate); //object

// let myCreatedate=new Date(2023,0, 23)
// let myCreatedate=new Date(2023,0, 23,5,3)
let myCreatedate=new Date("01-14-2023")

// console.log(myCreatedate);
// console.log(myCreatedate.toLocaleString()); //month start from 0 in JS


let myTimestamp=Date.now();

// console.log(myTimestamp);
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


let newDate= new Date();
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})