
// multiple condition - nested, ladder else if
// logical operator - connect
// && , ||, !

// let a = 2, b = 5, c = 11, d = 4, e = 8;

// if (a > b && a > c && a > d && a > e) {
//     console.log("a is max");
// } else if (b > c && b > d && b > e && b > a) {
//     console.log("b is max")
// } else if (c > a && c > b && c > d && c > e) {
//     console.log("c is max")
// } else if (d > a && d > b && d > c && d > e) {
//     console.log("d is max")
// } else if (e > a && e > b && e > c && e > d) {
//     console.log("e is max")
// }

// wap to find max/min from 5 numbers using ladder if else.
// wap to find grade based on percentage of 5 user given marks out of 100 using else if.
// wap to calculate electricity bill using else if ladder.
// wap to check number is divisible by 7 or not using if else.
// wap to check number is even or odd using if else.
// wap to check user is eligible or not using ternary operator
// wap to check number is neutral,negative and positive using ternary operator.
// wap to display month name by count of month using switch case, eg, 3 -> march, 11 -> november
// wap to display message based on grade using switch case.

// 4

// 1 to 20 -> 2rs/unit
// 21 to 40 -> 4rs/unit
// 41 to 60 -> 6rs/unit
// 61 to 80 -> 10rs/unit.

// 25 * 4 = 100rs

// const per = 89;

// if (per >= 91 && per <= 100) {
//     console.log("A+ Grade")
// }

// ternary operator
// single line

// const a = 10, b = 30;

// (condition)? true code : false code ;

// (a > b) ? console.log("a is max") : console.log("b is max")

// if (a > b) {
//     console.log("a is max")
// }
// else {
//     console.log("b is max")
// }


// const a = 30, b = 23;
// let max;

// max = (a > b) ? a : b; // ternary operator can return value with check condition.

// if (a > b) {
//     max = a;
// }
// else {
//     max = b;
// }
// console.log("max = ", max)


// switch...case.... = else if

// /
// /about
// /contact

// switch(screen)
// {
//     case '/' : HomeScreen
//     case '/contact' : contactscreen
// }

const grade = 'B';

switch (grade) {
    case 'A': case 'a': console.log("Excellent")
        break;
    // case 'a': console.log("Excellent")
    //     break;
    case 'B': case 'b': console.log("Good")
        break;
    case 'C': console.log("Average")
        break;
    case 'D': console.log("Poor")
        break;
    default: console.log("Enter valid grade !")
}

