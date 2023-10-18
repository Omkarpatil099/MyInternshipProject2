document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            const price = parseFloat(button.getAttribute("data-price"));
            cart.push({ product, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `${item.product}: $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    const viewCartButton = document.getElementById("view-cart");
    viewCartButton.addEventListener("click", () => {
        // You can implement cart view logic here (e.g., a modal or a separate page).
        // For a basic example, you can log the cart items to the console:
        console.log("Cart Items:", cart);
    });
});