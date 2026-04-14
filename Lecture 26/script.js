
// DOM - get,edit,create,append(add)

// timer functions
// setTimeOut - it can hold something(code) till specific time.
// setInterval - it can repeat something(code) on specific interval.

// PR - QUIZ APP -



// const id = setInterval(() => {
//     console.log("hello students...")
// }, 2000)


// setTimeout(() => {
//     clearInterval(id);
// }, 12000);

// const date = new Date();

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getDay())

const dt = document.getElementById("dt");
const time = document.getElementById("time");


setInterval(() => {
    const date = new Date();
    time.textContent = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds() + " PM";
    dt.textContent = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}, 1000);

// 1. time and date both should be up to date.
// 2. second must be visible and must be change.
// 3. show month name and day name in display.
// 4. show am/pm according to time. time<12 ? am : pm, time%12, 23%12 : 12 hours format
// 5. change backrground/theme according to time. - 

// digital clock - kal tak..