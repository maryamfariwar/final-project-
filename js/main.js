// js/main.js

// js/main.js

const productList = document.getElementById("product-list");

//  Fetch Data from Fake Store API
async function loadProducts() {
  try {
    // show loading
    productList.innerHTML = `<div class="text-center text-muted">Loading products...</div>`;

    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();

    // clear loading text
    productList.innerHTML = "";

    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "col-md-3 col-sm-6";

      card.innerHTML = `
        <div class="card h-100 text-center p-2">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h6 class="card-title text-truncate">${product.title}</h6>
            <p class="card-text fw-bold">$${product.price.toFixed(2)}</p>
            <button class="btn btn-primary add-to-cart" data-id="${product.id}">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      `;
      productList.appendChild(card);
    });

    attachCartListeners(data);

  } catch (error) {
    console.error(error);
    productList.innerHTML = `<p class="text-danger text-center">⚠️ Failed to load products. Try again later.</p>`;
  }
}

// Add to Cart 
function attachCartListeners(products) {
  const addButtons = document.querySelectorAll(".add-to-cart");

  addButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      const id = parseInt(btn.dataset.id);
      const product = products.find(p => p.id === id);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({
        id: product.id,
        name: product.title,
        price: product.price,
        img: product.image
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.title} added to cart!`);
    });
  });
}


loadProducts();



const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const id = parseInt(btn.dataset.id);
    const product = products.find(p => p.id === id);

    // Get existing cart or create new
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} added to cart!`);
  });
});

