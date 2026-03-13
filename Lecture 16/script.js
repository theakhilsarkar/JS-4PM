
// array with function

// print all element of array by function

// input process output

// function printArr(arr) {
//     arr.forEach((e) => {
//         console.log(e)
//     })4,
// }

// const array = [1, 2, 4, 5, 6]
// printArr(array)


// wap to find sum of all element of the array by using function

// function sumOfArray(arr) {
//     let sum = 0;
//     arr.forEach((a) => {
//         sum += a;
//     })
//     return sum;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const ans = sumOfArray(array);

// console.log(ans)


// wap to find maximum from array using function.

// const array = [1, 12, 47, 49]

// function findMax(arr) { // [1,12,47,49]
//     let max = arr[0]; // max = 1

//     arr.forEach((a) => { // a = 49
//         if (max < a) { // 47 < 49 : true
//             max = a; // max = 49
//         }
//     })

//     return max;
// }

// const ans = findMax([-1, -120, -47, -49])
// console.log(ans);


// sort array in acending order using brute force algorithem.

// let array = [2, 4, 3, 1, 0, 11, 23, 78]; // 0,1,2,3,4
// console.log(array)
// function sortArr(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 let temp = array[i];
//                 array[i] = array[j];
//                 array[j] = temp;
//             }
//         }
//     }
//     return array;
// }

// console.log(array.sort((a, b) => b - a))

// doors question.....

// 50 doors
// 50 doors locked
// master key

// 1 -> 1 2 3 4 5 6 7 8 9 10
// 2 -> 2 4 6 8 10 12 14 16 18 20
// 3 -> 3 6 9 12 ..
// 4 -> 4 8 12...
// 5 -> 5 10 15 20  ....

// open - 
// close - 
// 50
