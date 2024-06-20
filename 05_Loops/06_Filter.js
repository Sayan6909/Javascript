// Filter Basics


// const coding=["js", "python", "C++", "C"]

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);

// const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter((num)=> num>4)
// const newNums= myNums.filter((nums)=>{
//     return nums>4
// })
// console.log(newNums)

// const newNums=[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)

const books=[ 
    { title:'Book One', genre:'Fiction', publish:1981,
        edition:2004}, 
    { title:'Book Two', genre:'Non-Fiction', publish:1981,
        edition:2004},
    { title:'Book Three', genre:'Science', publish:1983,
        edition:2006},
    { title:'Book Four', genre:'Personal Development', publish:2016,
        edition:2017},
    { title:'Book Five', genre:'Inspirational', publish:1984,
        edition:2006},
    { title:'Book Six', genre:'Spiritual', publish:1986,
        edition:2007},
    { title:'Book Seven', genre:'Non-Fiction', publish:2019,
        edition:2020},
    { title:'Book Eight', genre:'Science', publish:1987,
        edition:2007},
];

let userBooks=books.filter((bk)=>bk.genre==='Science')
userBooks=books.filter((bk)=>{
    return bk.publish>=1982 && bk.genre==='Science'
})

console.log(userBooks);