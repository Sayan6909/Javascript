

// {}=>Scope
let a=100
if (true){
    let a=10;
    const b=20;
    // console.log("Inner:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="sayan"

    function two(){
        const website="github"

        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if (true){
    const username="Sayan"
    if(username==="Sayan"){

        const website = " github " 
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// **************************Interesting****************************

console.log(addOne(5));
function addOne(num){
    return num+1

}

addTwo(3)
const addTwo=function(num){
    return num+2

}