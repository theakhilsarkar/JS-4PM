const apikey = "AIzaSyC-5lTpNHAVeS4Jc4fvXBKCezccbQBMLBM";
const searchText = document.getElementById("input-book")
const searchButton = document.getElementById("search-book")
const booksBox = document.getElementById("books-box")

function displayBook(books) {
    booksBox.innerHTML = "";
    books.map((book) => {
        const div = document.createElement("div");
        div.innerHTML = `<div class="card m-3" style="width: 18rem;">
        <img src=${book.volumeInfo.imageLinks?.thumbnail || "https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"} style="height:250px" class="" alt="...">
        <div class="card-body">
            <h5 class="card-title">${book.volumeInfo.title}</h5>
            <p class="card-text">${book.volumeInfo.authors == undefined ? "No Author" : book.volumeInfo.authors[0]}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
        booksBox.appendChild(div);
    })
}

function fetchBooks() {
    const search = searchText.value == "" ? "Ramayana" : searchText.value;
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:keyes&key=${apikey}`;
    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            displayBook(data.items);
        })
}

searchButton.addEventListener("click", fetchBooks);
fetchBooks();
