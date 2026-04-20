const cartDiv = document.getElementById("cart-div")
const totalPrice = document.getElementById("total-price")


function removeCart(i) {
    let arr = JSON.parse(localStorage.getItem("carts")) || [];
    arr.splice(i, 1);
    localStorage.setItem("carts", JSON.stringify(arr));
    displayCartProducts();
}

function displayCartProducts() {
    let total = 0;
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    cartDiv.innerHTML = "";
    carts.forEach((element, i) => {
        total = total + (element.price * 93);
        const div = document.createElement("div")
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${element.images[0]} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">₹${element.price * 93}/-</p>
                            <p class="card-text"><small class="text-body-secondary">Qty ${element.qty}</small></p>
                        </div>
                        <button onclick="removeCart(${i})" class="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>`;
        cartDiv.appendChild(div)
    });
    totalPrice.textContent = "Total : ₹ " + (total.toFixed(2)) + "/-";
}

displayCartProducts();

