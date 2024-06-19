// Higher oder function

const coding=["js", "python", "C++", "C"]

// coding.forEach( function(item){
//     // console.log(item);
// } )

// coding.forEach( (item)=>{
//     console.log(item);
// } )

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr)=>{
//     console.log(item,index,arr )
// } )

const myCoding=[
    {
    languageName:"Java Script",
    languageFile:"JS"
    },
    {
    languageName:"Java",
    languageFile:"java"
    },
    {
    languageName:"Python",
    languageFile:"py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.languageName)
} )