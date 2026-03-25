
// DOM - Document Object Model

// html file -> object

// nail cutter

// we can control html/css using js

// random bg color generator
// document.body.style.backgroundColor = "black";

const buttons = document.getElementsByTagName("button"); // used to get element(tag) from document(index.html) by tag name

// button = <button> Click </button>

// buttons[0].textContent = "name changed"; // to change text content of any element.

// buttons[1].textContent = "button changed"

// process = event = activity performed by user
// to add click on button, addEventListner

buttons[0].addEventListener("click", () => {
    const str = Math.floor(Math.random() * 16581375).toString(16); // to generate a random number from 0 to 1,
    document.body.style.backgroundColor = "#" + str;
    buttons[0].textContent = str;
});



