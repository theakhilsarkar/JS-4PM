const productsDivison = document.getElementById("products-div")
let allProducts = [];


async function addToCart(i) {
    const arr = JSON.parse(localStorage.getItem("carts")) || [];
    const res = arr.findIndex((e) => e.id == allProducts[i].id)

    if (res == -1) { 
        allProducts[i].qty = 1;
        arr.push(allProducts[i]);
    } else {
        arr[res].qty++;
    }

    localStorage.setItem("carts", JSON.stringify(arr));
}

function displayProducts(products) {
    products.forEach((product, i) => {
        const div = document.createElement("div"); // <div></div>
        div.className = "card p-0";
        div.style.width = "18rem";
        div.innerHTML = `
                <img src=${product.images[0]}
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.category}</p>
                    <p class="card-text">Qty ${product.qty}</p>
                    <p class="card-text fs-5">Price ₹${(product.price * 93).toFixed(2)}/-</p>
                    <button onclick="addToCart(${i})" class="btn btn-primary">Add to Cart</button>
                </div>
            `;
        productsDivison.appendChild(div);
    })
}


// asyncronous function
async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    allProducts = data.products;
    displayProducts(data.products)
}



fetchProducts();

// local storage - 10mb - text - string

// localStorage.setItem("key", "value")
// localStorage.getItem("key")

// const a = [1,2,3]
// a.push(4)
// a = [1,2,3,4]

// 3 hrs 