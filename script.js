 {
        id: 1,
        name: "Headphones",
        price: 1500,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 3000,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        name: "Shoes",
        price: 2500,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 4,
        name: "Backpack",
        price: 1200,
        image: "https://via.placeholder.com/200"
    }
];

let cart = [];

function displayProducts() {

    const productList = document.getElementById("product-list");

    products.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
`;

        productList.appendChild(div);

    });

}

function addToCart(id) {

    const product = products.find(p => p.id === id);
    cart.push(product);

    updateCart();

}

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    const count = document.getElementById("cart-count");

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);

        sum += item.price;

    });

    total.textContent = sum;
    count.textContent = cart.length;

}

function toggleCart() {

    const cartBox = document.getElementById("cart");

    cartBox.style.display =
        cartBox.style.display === "block" ? "none" : "block";

}

displayProducts();