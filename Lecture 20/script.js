// const title2 = document.getElementById("title-2"); // single html element
// const title3 = document.getElementsByClassName("title-3"); // array of html elements

// const qtitle2 = document.querySelector("#title-2"); // it can select html element from documents, by id and class both.., 

// const qtitle3 = document.querySelector(".title-3"); // it return only first matching element from document

// const qgtitle3 = document.querySelectorAll(".title-3");

// title2.textContent = "new Title 2";
// title3[0].textContent = "new Title 3" // use index for accessing array.

// counter app - perform all arithmatic operator , ++,--, *=2, /=2, %=2

// const count = document.getElementById("count")
// const button1 = document.getElementById("button1")
// const button2 = document.getElementById("button2")
// const button3 = document.getElementById("button3")
// const button4 = document.getElementById("button4")

// button1.addEventListener("click", () => {
//     count.textContent++;
// })

// button2.addEventListener("click", () => {
//     count.textContent--;
// })

// button3.addEventListener("click", () => {
//     count.textContent = 0;
// })

// button4.addEventListener("click", () => {
//     count.textContent *= 2;
// })

// receipie - step by step process to cook any food.

const input_name = document.querySelector("#input-name");
const btn_find = document.querySelector("#btn-find");

// algorithem - step by step process to solve any problem, 
// step 1 - write in box
// step 2 - click on button
// step 3 - fetch value from box and store in variable
// step 4 - display in dialouge box

btn_find.addEventListener("click", () => {
    const value = input_name.value;
    alert(value);
})