
// wap to swap(interchange) values of two variable without using third variable.

// let a = 20; // a = 20
// let b = 30; // b = 30

// a = a + b; // a = 20 + 30; a = 50
// b = a - b; // b = 50 - 30; b = 20
// a = a - b; // a = 50 - 20; a = 30

// console.log("a =", a);
// console.log("b =", b);

// datatype
// variable
// operators - 4 types

// operator - operator is one type of symbol which used to perform operation on the value(operand).

// 1. unary operator - unary operator need one operand to perform operation.
// ++,-- : symbols
// use:
// ++ : used increment +1 in a value.
// -- : used decrement -1 in a value.
// ex :
// let a = 10;
// console.log(a)
// a++; // +1
// a--; // -1
// console.log(a);

// 2. binary operator - binary operators need minimum two operands to perform.

// 1. arithmatic operator - used to perform mathamatical operation on the values.
// symbols : +,-,*,/,%
// let a=10,b=20;
// a+b -> 30
// % <- it used to get reminder.
// 17%2 -> 1
// 17%3 -> 2
// 17%? -> 0
// 21%3 -> 0
// if any number is not divisible by any number instead of self and one, prime number.


// 2. assignment operator - used to assign value to the variable.
// symbols - =,+=,-=,*=,/=

// let a = 30; value 30 is assigned in variable a.
// a += 20; // a = a + 20  -> a = 50
// a -= a; //  a = a - a , a = 50 - 50 = 0
// a *= 20; // a -> 0
// a += a; // a = 0
// a +=2;
// a/=2; -> a = 1 



// 3. relational/comparison/conditional operator - used to compare two values.
// >,<,>=,<=,==,!=
// condition answer is always either 0(false) or 1(true).
// let a = 10
// let b = 11
// console.log(a <= b);


// 4. logical operator - &&(AND), ||(OR) , !(NOT)
// logical operator is used to connet two or more conditions.

// i have a car.
// i have a bike.
// i have a car or a bike. 

// && <- all condition must be true to get final answer true.
// true false -> false
// false true -> false
// false false -> false
// true true -> true

// || <- any one condition must be true to get final answer true.
// 0 0 -> 0
// 0 1 -> 1
// 1 0 -> 1
// 1 1 -> 1

// ! <- it reverse the output
// 0 -> 1
// 1 -> 0

// i have not a car.

let a = 4.5, b = 5, c = 4;
console.log((!(a > b) && a > c));