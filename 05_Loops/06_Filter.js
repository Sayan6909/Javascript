// Filter Basics


// const coding=["js", "python", "C++", "C"]

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter((num)=> num>4)
const newNums= myNums.filter((nums)=>{
    return nums>4
})


console.log(newNums)
