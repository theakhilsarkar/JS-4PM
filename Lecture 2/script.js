// javascript run only in browser threw html.
// .js -> extension used to create js file.
// what is importance of extension ?
// by extention is identity of file which help to know content/information inside the file.

// console.log() ->
// document.writeln() ->

// datatype -> 
// data ? -> information
// !Number -> all numeric values are considered in number.
// ? 0 to 9, 12.34,12,-90,0, 1+1 = 2 
// !String(text) -> all characters and alphanumeric values are consider in string
// ?ex. kunal,k,k9,"123",'123', "1"+"1" -> "11"
// Object
// Array - collection of multiple values
// Object - collection of multiple key-value pair.

// implicit(js) & explicit(c)

// website -> user input -> process -> output

// variables - is one type of container where we can store a value.

// form
// email ->
// password -> 
// button

// variable(truck)

// to define variable in javascript there are 3 keywords.
// var,let,const

// let a = 10;
// let b = 30;
// let p = "1";
// let q = "1";

// console.log(typeof a)
// console.log(b)
// console.log(a + b)
// console.log(typeof p)

// let is a keyword to define a variable in js.
// we can re-assign value to the let define variable.

// const is a keyword to define a variable in js.
// we cant re-assign value to the const define variable.

const a = 10; // now 10 is fixed value for variable a.
// a = 20; we cant assign new value to const variable
// when you want to fix value of variable.

let b = 10;
b = 20; // we are changing(re-assign) value of variable from 10 to 20.
// let b = 20; // we are creating another variable with name b.
// when you want to change value of variable.

// console.log(a);
// console.log(b);

// wap to swap(interchange) values of two variable using third variable.
// wap to swap(interchange) values of two variable without using third variable.
// x = 20
// y = 10

let x = 10;
let y = 20;
let z = x; //z = 100

x = y; // x = 200
y = z; // y = 100

console.log("x =", x) // x = 10
console.log("y =", y) // y = 20