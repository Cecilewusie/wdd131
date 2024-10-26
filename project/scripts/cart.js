const humbutton = document.querySelector(".menu");
const navB = document.querySelector("nav");
 
//adding event to the humbutton
humbutton.addEventListener("click", ()=> {
    navB.classList.toggle("show");
    humbutton.classList.toggle("show");
})

// Function to render cart items
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cartItems");

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    // Display each item in the cart
    cartItemsContainer.innerHTML = cartItems.map((item, index) => `
        <div class="cart-item">
            <img src="${item.imageUrl}" alt="${item.modelName}" loading=lazy>
            <h3>${item.modelTitle} ${item.modelName}</h3>
            <p><strong>Year:</strong> ${item.year}</p>
            <p><strong>Engine:</strong> ${item.engine}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button class="remove-item" data-index="${index}" title="click to remove item">❌</button>
            <button class="buy-now">Buy Now</button>
        </div>
    `).join("");

    // Add event listeners for each remove button
    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            removeFromCart(index);
        });
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItems(); // Refresh the cart display
}

// Load cart items on page load
document.addEventListener("DOMContentLoaded", displayCartItems());