
// 1. search google cloud console
// 2. search books api
// 3. press enable 
// 4. credential -> create credential
// 5. api key -> books api -> done
// 6. copy api key and store at safe place and away from sunlight.

const apikey = "AIzaSyC-5lTpNHAVeS4Jc4fvXBKCezccbQBMLBM";

const searchText = document.getElementById("search-text");
const searchBtn = document.getElementById("search-btn");
const booksBox = document.getElementById("books-box");

console.log(booksBox);

// .volumeInfo.imageLinks.thumbnail
// .volumeInfo.title
// .volumeInfo.description
// .volumeInfo.authors[0]

function displayBooks(books) {
    if (!books || books.length === 0) {
        booksBox.innerHTML = "<p>No Books Found...</p>";
        return;
    }

    booksBox.innerHTML = "";

    books.map((book) => {
        const info = book.volumeInfo;

        const thumbnail = info.imageLinks?.thumbnail
            || "https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg";

        const title = info.title || "No Title";
        const description = info.description || "No Description Available";
        const author = info.authors?.[0] || "No Author";

        const div = document.createElement("div");
        div.className = "col-6";

        div.innerHTML = `
        <div class="card">
            <div class="card-body">
                <img src="${thumbnail}" style="height:250px" />
                <h5>${title}</h5>
                <p>${description}</p>
                <p>${author}</p>
            </div>
        </div>`;

        booksBox.appendChild(div);
    });
}

// function displayBooks(books) {
//     if (books.length == 0 || books == null) {
//         console.log("book = 0...")
//         const p = document.createElement("p");
//         p.textContent = "Loading...."
//         booksBox.appendChild(p);
//         return;
//     }
//     booksBox.innerHTML = "";
//     books.map((book) => {
//         // console.log(book.volumeInfo.imageLinks)
//         const div = document.createElement("div");
//         div.className = "col-6";
//         div.innerHTML = `<div class="card" style="">
//                 <div class="card-body">
//                 <img src=${book.volumeInfo.imageLinks.smallThumbnail == undefined ? "https://img.freepik.com/free-vector/stack-colorful-books_1308-171744.jpg?semt=ais_incoming&w=740&q=80" : book.volumeInfo.imageLinks.thumbnail} style="height:250px" class="" alt="...">
//                     <h5 class="card-title">${book.volumeInfo.title}</h5>
//                     <p class="card-text">${book.volumeInfo.description}</p>
//                     <p class="card-text">${book.volumeInfo.authors[0] || "No Author"}</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>`;
//         console.log(div)
//         booksBox.appendChild(div);
//     })
// }

function fetchBooks() {
    const search = searchText.value;
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:keyes&key=${apikey}`;
    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.items)
            displayBooks(data.items);
        })
}





searchBtn.addEventListener("click", fetchBooks)

// api data, glitch

// null awareness

// null undefine

// movie t=

// book, movie title=