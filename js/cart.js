// js/cart.js

const cartContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-center text-muted">Your cart is empty 😢</p>`;
    cartTotal.textContent = '0.00';
    return;
  }

  cart.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'd-flex justify-content-between align-items-center border-bottom py-3';
    row.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.img}" alt="${item.name}" width="60" class="rounded me-3">
        <div>
          <h6 class="mb-0">${item.name}</h6>
          <small class="text-muted">$${item.price.toFixed(2)}</small>
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    cartContainer.appendChild(row);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Load cart on page load
renderCart();
