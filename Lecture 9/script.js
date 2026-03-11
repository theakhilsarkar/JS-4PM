
// let,const
// variable
// Number,String,Array,Object

// if else, else if
// while,do..while,for

// function - is a reuseable block of code which is used to perform specific task.
// function execute only when we call it.
// we should create function to define process/feature/functionality.

// -> code become more reuseable
// -> code become more structurized

// 1. pre define function - built in
// Math.floor()
// console.log()
// document.write()
// const age = prompt("Enter your age : ");
// console.log(typeof Number(age));
// console.log(typeof parseInt(age));

// 2. user define function - udf - user created

// we can create function by using function keyword
// how to create a function
// function functionName(){
// reuseable code.
//}

// how to call function
// functionName()

// function creation,declaration
function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " * " + i + " = " + n * i);
    }
    console.log("")
}

printTable(8); // callin
printTable(12)
printTable(124)
printTable(124)
