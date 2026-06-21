function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

function updateAuthState() {
  const loggedIn = localStorage.getItem('healthhub_user') === 'true';
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (loginBtn) loginBtn.classList.toggle('hidden', loggedIn);
  if (logoutBtn) logoutBtn.classList.toggle('hidden', !loggedIn);
}

function loginUser(event) {
  event.preventDefault();
  localStorage.setItem('healthhub_user', 'true');
  window.location.href = 'dashboard.html';
}

function logoutUser() {
  localStorage.removeItem('healthhub_user');
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', updateAuthState);
document.addEventListener('DOMContentLoaded', updateAuthState);

document.querySelectorAll('.interactive-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});