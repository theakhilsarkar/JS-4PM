
// programming - process of giving instruction(program) to the machine to perform any task.

// syncronous programming - static task
// step by step

// console.log("line - 1")
// console.log("line - 2")
// console.log("line - 3")

// asyncronous programming - network/internet - parallel task 
// step by step with hold/delay&skip

// console.log("line - 1")
// console.log("line - 2") // network request - data comes from api/server
// console.log("line - 3")

// console.log("line - 1")
// setTimeout(() => { console.log("line - 2") }, 2000)
// console.log("line - 3")

// line - 1
// line - 2 - code - hold, await
// line - 3 - this line is depended on line 2 
// async 
// const res = await fetch("api url") // network - delay
// const data = await res.json(); // 
// console.log(data); // data print -> done 

// const a = await fetch("api");  Promise<res>
// data -> simple/static -
// data -> promise


// JS - if we have to pass data from one file to another file 

// module system 
// module - block of code which can be export and import in other files.

// const math = require("./math.js");
const { counter, sum } = require("./math.js"); // destructuring

console.log(counter)
sum(23, 45)

// math.js - sum,sub,div,mult - functions - expors
// script.js - import - use 

// THE END.     