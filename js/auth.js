// js/auth.js

const form = document.getElementById('auth-form');
const registerBtn = document.getElementById('registerBtn');
const welcomeMsg = document.getElementById('welcome-msg');
const userName = document.getElementById('user-name');
const logoutBtn = document.getElementById('logoutBtn');

// Check if user already logged in
const currentUser = localStorage.getItem('currentUser');

if (currentUser) {
  form.classList.add('d-none');
  welcomeMsg.classList.remove('d-none');
  userName.textContent = currentUser;
}

// REGISTER 
registerBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Please enter username and password!');
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.find(u => u.username === username)) {
    alert('Username already exists!');
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('✅ Registration successful! You can now log in.');
});

// LOGIN 
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  let users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('currentUser', username);
    alert(`Welcome, ${username}!`);
    window.location.href = 'index.html';
  } else {
    alert('❌ Invalid credentials!');
  }
});

// LOGOUT
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  alert('You have logged out.');
  window.location.reload();
});
