// const tinderUser= new Object(); //singleton object
const tinderUser={}                 //non singletonobject

tinderUser.id="123abc"
tinderUser.name="sayan"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"Sayan@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sayan",
            lastname:"Mukherjee"
        }
    }

}

// console.log(regularUser.fullname.userfullname);

const obj1={1: "a", 2: "b"};
const obj2={3: "a", 4: "b"};
const obj4={5: "a", 6: "b"};



// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}

// console.log(obj3);

const users=[
    {
        id:1,
        email:"sayan@email.com",

    },
    {
        id:1,
        email:"sayan@email.com",

    },
    {
        id:1,
        email:"sayan@email.com",

    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));       //*Most important
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course={
    course_name:"Java Script",
    price:"999",
    course_Instructor:"SAYAN"

}
//de structuring objects
const{course_Instructor:Instructor}=course
// console.log(course_Instructor);
console.log(Instructor);

const nav=()=>{
    
}