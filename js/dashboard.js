// js/dashboard.js

const usernameDisplay = document.getElementById('username');
const userSection = document.getElementById('user-section');
const unauthorized = document.getElementById('unauthorized');
const logoutBtn = document.getElementById('logout');

const currentUser = localStorage.getItem('currentUser');

if (currentUser) {
  userSection.classList.remove('d-none');
  usernameDisplay.textContent = currentUser;
} else {
  unauthorized.classList.remove('d-none');
}

//  Logout 
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  alert('You have been logged out.');
  window.location.href = 'login.html';
});
