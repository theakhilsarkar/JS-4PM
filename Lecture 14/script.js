let arr = [1, 2, 3, 4, 5];

arr.push(25); // insert value in array at the last position
arr.push(28);
arr.push(12);
arr.push(46);

arr.pop(); // to remove last value of the array
arr.pop();
arr.pop();

arr.unshift(18); // to insert value at the starting in array.
arr.shift(); // it remove first element of the array.

const v1 = arr.at(2)
const v2 = arr[2]

const a1 = arr.slice(1, 4); // 
arr.splice(1, 1); // (index,count(how many values want to remove from index))

arr[2] = 6 // updation in the array

arr.forEach((e) => {
    if (e % 2 == 1) {
        console.log(e)
    }
});

// console.log(arr)


