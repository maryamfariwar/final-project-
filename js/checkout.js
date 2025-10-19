// js/checkout.js

const form = document.getElementById('checkout-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const address = document.getElementById('address');
  const card = document.getElementById('card');

  let valid = true;

  // Name
  if (name.value.trim() === '') {
    name.classList.add('is-invalid');
    valid = false;
  } else {
    name.classList.remove('is-invalid');
  }

  // Email
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // Address
  if (address.value.trim() === '') {
    address.classList.add('is-invalid');
    valid = false;
  } else {
    address.classList.remove('is-invalid');
  }

  // Card
  if (card.value.length !== 5 || isNaN(card.value)) {
    card.classList.add('is-invalid');
    valid = false;
  } else {
    card.classList.remove('is-invalid');
  }

  if (valid) {
    alert('✅ Order placed successfully!');
    localStorage.removeItem('cart');  
    form.reset();
  }
});
