// nav functions

let nav = document.querySelector(".nav");

nav.innerHTML = `<ul class="navbar-links">
<li class="navbar-link">
  <a onclick="navToggle()" href="#" class="navbar-anchor">Shop</a>
</li>
<li class="navbar-link">
  <a onclick="navToggle()" href="#" class="navbar-anchor">History</a>
</li>
<li class="navbar-link">
  <a onclick="navToggle()" href="#" class="navbar-anchor">Cart</a>
</li>
<li class="navbar-link">
  <a onclick="navToggle()" href="#" class="navbar-anchor">Products</a>
</li>
<li class="navbar-link">
  <a onclick="navToggle()" href="#" class="navbar-anchor">Logout</a>
</li>
</ul>`;

function navToggle() {
  nav.classList.toggle("active");
}

// Header code

let header = document.querySelector(".header");

header.innerHTML = `<button onclick="navToggle()" class="nav-button">---</button>
<p class="logo"></p>
<button onclick="themeChange()" class="switch">+++</button>`;

// Theme changer

function themeChange() {
  document.body.classList.toggle("dark-theme");
}
