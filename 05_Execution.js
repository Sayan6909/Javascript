// Javascript Execution Context:-
// It means how javascript Execute the program
// 1. Global Execution Context:- GEC stored in "this" function. In browser the output of "this" is "Window".
// 2. Functional Execution Context:-
// 3. Eval Execution Context:-


// Two Phases:-
// 1. Memory Creation Phase:- 
// 2. Execution Phase

let val1=10;
let val2=5;
function addnum(num1, num2){
    let total=num1+num2
    return total
}
let reuslt1=addnum(val1,val2)
let result2=addnum(10,2)

//1. Global Scope ->This
//2.Memory Phase->
// val 1=undefined
// val 2=undefined
// addnum=>definition
// reuslt1=>undefined
// result2=>undefined
//3.Execution Phase->
// val1<=10
// val2<=5
// addnum=>[new variable environment+execution thread] It is also know as New executional context
// Whenever the number of  times if we call a function each time it will aways execute memory phase and Execution phase
// it deletes after execution

//************** 
// Memory phase:-
// val1=>undefined
// val2=>undefined
// total=>undefined
//**************
//Execution Phase:-
// num1=>10
// num2=>5
// total=>15

// Return-> on parent executional context it will return the variable or in the global executional context

//New variable environment


