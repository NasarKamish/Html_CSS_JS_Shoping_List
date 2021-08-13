// Edit function

function showEdit(index) {
  console.log(index);
  let display = "";
  if (index == -1) {
    display = "none";
  } else {
    display = "flex";
  }
  let edit_container = document.querySelector(".section-edit");
  edit_container.style.display = display;
  let old_container = document.querySelector(".old-info");
  fetch("http://127.0.0.1:5000/get-products/").then((request) => {
    request.json().then((obj) => {
      console.log(obj);
      data = obj.data;
      console.log(data[index]);
      product = data[index];
      old_container.innerHTML = `<div class="item">
         <p class="product-name">Name: ${product[1]}</p>
         <p class="product-price">Price: ${product[2]}</p>
         <p class="product-date">Date: ${product[3]}</p> 
     </div>`;
      //  button with index for delete
    });
  });
}

// Fetching poducts and displaying some

let container = document.querySelector(".container");

fetch("http://127.0.0.1:5000/get-products/").then((request) => {
  request.json().then((obj) => {
    console.log(obj);
    data = obj.data;
    console.log(data);
    container.innerHTML = ``;
    let index = 0;
    data.forEach((product) => {
      container.innerHTML += `<div class="item">
         <p class="product-name">Name: ${product[1]}</p>
         <p class="product-price">Price: ${product[2]}</p>
         <p class="product-date">Date: ${product[3]}</p>
         <button onclick="showEdit(${index})" class="btn-edit">Edit</button>
         <button class="btn-delete">Delete</button>
     </div>`;
      console.log(index);
      index++;
    });
  });
});