// wap create functions to perform all arithmatic operations.
// +,-,*,/

// function addition(num1, num2) {
//     // const ans = num1 + num2;
//     // return ans;
//     return num1 + num2;
// }

// function substraction(num1, num2) {
//     return num1 - num2;
// }

// function division(num1, num2) {
//     return num1 / num2;
// }

// function mutiply(num1, num2) {
//     return num1 * num2;
// }

// const sum = addition(20, 40);
// console.log("sum is", sum)

// const sub = substraction(40, 20);
// console.log("substraction is", sub);

// const div = division(28, 4);
// console.log("division is", div);

// const mult = mutiply(18, 8);
// console.log("multiply is", mult);

// wap to find cube of any number using function.

// function cube(num) {
//     return num * num * num;
// }
// const ans = cube(4);
// console.log("cube is", ans)


// wap to print 1 to n using function.

// function printN(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// printN(5)

// wap to check number is palindrom or not?

// function checkPalindrom(num) {
//     const safe = num;
//     let rev = 0;
//     while (num > 0) {
//         const ld = num % 10;
//         rev = (rev * 10) + ld;
//         num = Math.floor(num / 10);
//     }
//     console.log(rev);
//     return safe == rev;
// }

// console.log(checkPalindrom(1221))


// wap to creare basic calc by switch case and function.
function addition(num1, num2) {
    return num1 + num2;
}

function substraction(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// 1 -> +
// 2 -> -
// 3 -> *
// 4 -> /

let choice = 2;
const num1 = 30;
const num2 = 20;

switch (choice) {
    case 1:
        const a = addition(num1, num2);
        console.log("sum is ", a)
        break;
    case 2:
        const b = substraction(num1, num2);
        console.log("substraction is ", b)
        break;
    case 3:
        const c = multiply(num1, num2);
        console.log("multiply is ", c)
        break;
    case 4:
        const d = division(num1, num2);
        console.log("division is ", d)
        break;
}