const name="sayan";
const repoCount=50;

// console.log(name + repoCount + "value");

// bacticks

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName=new String('Sayan-SM')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString=gameName.substring(0,4); //upto 3rd index it will print, it will not include the last index which is entered
console.log(newString);

const anotherString=gameName.slice(-6,4);
console.log(anotherString);

const newString1="  Sayan     "
console.log(newString1.trim());

const url="https://www.sayan%20mukherjee.com"
console.log(url.replace("%20", "-"));


console.log(url.includes("work"));

console.log(gameName.split('-'));



