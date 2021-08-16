let cart = [];

let item_container = document.querySelector(".items");

fetch("http://127.0.0.1:5000/get-products/").then((request) => {
  request.json().then((obj) => {
    // console.log(obj);
    data = obj.data;
    // console.log(data);
    item_container.innerHTML = ``;
    let index = 0;
    data.forEach((product) => {
      item_container.innerHTML += `<div class="item">
         <img src="https://picsum.photos/200/200?random=${product[0]}" alt="${product[1]}">
         <p class="product-name">Name: ${product[1]}</p>
         <p class="product-price">Price: ${product[2]}</p>
         <p class="product-date">Date: ${product[3]}</p>
         <button onclick="addToCart(${product[0]})" class="btn-Add btn-Add-${product[0]}">Add to cart</button>
     </div>`;
      //   console.log(index);
      index++;
    });
  });
});

function addToCart(index) {
  cart.push(index);
  //   console.log(cart);
  let add_btn = document.querySelector(`.btn-Add-${index}`);
  //   console.log(add_btn);
  add_btn.style.display = "none";
  populateCart();
}

function showCart() {
  document.querySelector(".cart").classList.toggle("active");
}

function populateCart() {
  fetch("http://127.0.0.1:5000/get-products/").then((request) => {
    request.json().then((obj) => {
      //   console.log(obj);
      data = obj.data;
      let cart_container = document.querySelector(".cart");
      let total_cost = 0;
      //   let total = 0;
      cart_container.innerHTML = ``;
      cart.forEach((order) => {
        // console.log(order);
        data.forEach((product) => {
          if (product[0] == order) {
            // console.log(product);
            total_cost += parseFloat(product[2]);
            cart_container.innerHTML += `<div class="cart-item">
            <p class="id">${product[0]}</p>
            <p class="name">${product[1]}</p>
            <p class="price">${product[2]}</p>
            <p class="quantity">1</p>
          </div>`;
          }
        });
      });
      createTotal(total_cost);
    });
  });
}

function createTotal(cost) {
  let total_container = document.querySelector(".cart");
  total_container.innerHTML += `<div class="total-div">
  <p class="total-p">Total : ${cost}</p>
  </div>`;
}
