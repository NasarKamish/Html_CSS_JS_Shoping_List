let cart = [];

let item_container = document.querySelector(".items");

fetch("http://127.0.0.1:5000/get-products/").then((request) => {
  request.json().then((obj) => {
    console.log(obj);
    data = obj.data;
    console.log(data);
    item_container.innerHTML = ``;
    let index = 0;
    data.forEach((product) => {
      item_container.innerHTML += `<div class="item">
         <img src="https://picsum.photos/200/200?random=${product[0]}" alt="${product[1]}">
         <p class="product-name">Name: ${product[1]}</p>
         <p class="product-price">Price: ${product[2]}</p>
         <p class="product-date">Date: ${product[3]}</p>
         <button onclick="addToCart(${product[0]})" class="btn-Add">Add to cart</button>
     </div>`;
      console.log(index);
      index++;
    });
  });
});

function addToCart(item) {
  console.log(1);
  cart.push(item);
  console.log(cart);
}

function showCart() {
  document.querySelector(".cart").classList.toggle("active");
}
