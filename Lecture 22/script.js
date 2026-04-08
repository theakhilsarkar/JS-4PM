// DOM

// get, update, delete, local storage

// quotes -> array 

// API - application programming interface
// API is one type of URL.
// It is bridge between server(backend) and client(frontend).
// Uses to communicate between server and client.
// api can send request to the server and receive response from the server.

// client = frontend : to send request to the server
// request = is a command to server for specific service.

// server = backend : to handle request and send response.
// response = output/result according request.

// front <===API===> back


// api in js

// process of sending request to the server is called as api calling.

// how api calls in js.
// using fetch function


// API request types

// 1. GET - to fetch/get data from server
// 2. POST - to send data to the server
// 3. PUT/PATCH - to update data in server
// 4. DELETE - to remove data in server.

// api calling - GET
// api create --> node js

// api calling
// 1. call api by fetch function
// 2. fetch return response in promise
// 3. use .then() to handle promise.
// 4. .then((res)=>res.json()), conver response into json by .json()
// 5. .json() is also return data in promise
// 6. .then((data)=> now you can use,,,,)

// fetch
// .then - .json
// .then - use

const image = document.getElementById("image")
const refresh = document.getElementById("btn-refresh")

function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            image.src = data.message;
        });
}

fetchDog();

refresh.addEventListener("click", () => {
    fetchDog();
})

// API
// https://www.googleapis.com/books/v1/volumes?q=7habit+intitle:keyes&key=AIzaSyBrAyhQAkp6SkB_p4tgn2OkzaWjhKOJfSw


// BASE URL - https://www.googleapis.com/books
// ROUTES - /v1/volumes
// q - query (input-request which gives data according to your need.)
// key - password, secret key, which is allow to access api.



// Book Cart, name
// movie search

// bb360562

// base url - https://www.omdbapi.com
// ? apikey = keyy
// & t (title) = movie title

// https://www.omdbapi.com/?apikey=bb360562&t=chhava


