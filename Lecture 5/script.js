// js
// control structure
// if-else

// nested if else -> handle multiple condition level by level

// cricket

// a,b,c

// a>b -> a>c -> a is winner
//     -> a>c -> c is winner
// b>c -> b is winner
//     -> c is winner


// const a = 147, b = 11, c = 425;

// //a,b,c
// if (a > b) {
//     // a,c
//     if (a > c) {
//         // a
//         console.log("a is max");
//     }
//     else {
//         // c
//         console.log("c is max");
//     }
// }
// else {
//     // b,c
//     if (b > c) {
//         //b
//         console.log("b is max");
//     }
//     else {
//         //c
//         console.log("c is max");
//     }
// }

// a,b,c,d

const a = 2, b = 3, c = 1, d = 5;

if (a > b) {
    if (a > c) {
        if (a > d) {
            console.log("a is max")
        }
        else {
            console.log("d is max")
        }
    }
    else {
        if (c > d) {
            console.log("c is max")
        }
        else {
            console.log("d is max")
        }
    }
}
else {
    // b,c,d
    if (b > c) {
        //b,d
        if (b > d) {
            console.log("b is max")
        }
        else {
            console.log("d is max")
        }
    }
    else {
        //c,d
        if (c > d) {
            console.log("c is max")
        }
        else {
            console.log("d is max")
        }
    }
}

// wap to find minimum from 5 numbers using nested if else.



