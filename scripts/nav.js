// nav functions

let nav = document.querySelector(".nav");

nav.innerHTML = `<ul class="navbar-links">
<li class="navbar-link">
  <a onclick="navToggle()" href="../shopList.html" class="navbar-anchor">Shop</a>
</li>
<li class="navbar-link">
  <a onclick="navToggle()" href="../showingProducts.html" class="navbar-anchor">Product List</a>
</li>
<li class="navbar-link">
  <a onclick="navToggle()" href="../addingProduct.html" class="navbar-anchor">Add Product</a>
</li>
<li class="navbar-link">
  <a onclick="navToggle()" href="../index.html" class="navbar-anchor">Logout</a>
</li>
</ul>`;

function navToggle() {
  nav.classList.toggle("active");
}

// Header code

let header = document.querySelector(".header");

header.innerHTML = `<button onclick="navToggle()" class="nav-button">NavBar</button>
<p class="logo"></p>
<button onclick="themeChange()" class="switch">Theme</button>`;

// Theme changer

function themeChange() {
  document.body.classList.toggle("dark-theme");
}
