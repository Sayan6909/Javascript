const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,curVal)=>{
//     console.log(`Accumulator: ${acc} & Current Value: ${curVal}`)
//     return acc+curVal

// },3)

// const myTotal=myNums.reduce((acc,curVal)=>(acc+curVal),0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemname:"JS course",
        price:2999
    },
    {
        itemname:"Python Course",
        price:999
    },
    {
        itemname:"Mobile Dev",
        price:5999
    },
    {
        itemname:"Data Scientist",
        price:12999
    },

]

const totalPay=shoppingCart.reduce((acc,item)=>(acc + item.price),0)

console.log(totalPay);

