const cartDiv = document.getElementById("cart-div")


function displayCartProducts() {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    cartDiv.innerHTML = "";
    carts.forEach(element => {
        const div = document.createElement("div")
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${element.images[0]} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.price}</p>
                            <p class="card-text"><small class="text-body-secondary">${element.category}</small></p>
                        </div>
                    </div>
                </div>
            </div>`;
        cartDiv.appendChild(div)
    });
}

displayCartProducts();

