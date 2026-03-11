
// input -> process -> output
// process
// return keyword - it is used to return value outside the function.

// function sum() {
//     console.log("10 + 20 = ", 30)
// }

// const a = Math.floor(12.23);
// console.log("a = ", a)
// console.log("12.23 -> ", a)

// wap to create a function which return sum of two numbers.

// return
// 1. its used to return value from function to outside the function
// 2. return keyword can return only one value at a time.
// 3. code written after return will be not execute.

// function sum(a, b) {
//     return a + b;
// }

// const ans = sum(20, 40)
// console.log(ans)

// wap to check you are eligible for next std or not.

function checkNext(guj, hin, eng, math, sci, ss) {
    const per = (guj + hin + eng + math + sci + ss) / 6;
    if (per >= 40) {
        return true;
    } else {
        return false;
    }
}

const status = checkNext(20, 20, 40, 50, 30, 30);

if (status) {
    console.log("you are eligible for next std")
} else {
    console.log("you are not eligible for next std")

}