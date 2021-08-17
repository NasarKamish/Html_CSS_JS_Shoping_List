let register = document.querySelector(".register");
let login = document.querySelector(".login");

function themeChange() {
  document.body.classList.toggle("dark-theme");
}

function showRegister() {
  register.classList.toggle("show");
  login.classList.toggle("hide");
}

// Fetching users
function logIn() {
  let inputs = document.querySelectorAll(".login-input");
  fetch("https://fathomless-wildwood-85481.herokuapp.com/get-users/").then(
    (request) => {
      request.json().then((obj) => {
        data = obj.data;
        data.forEach((person) => {
          console.log(person);
          if (person[1] == inputs[0].value && person[2] == inputs[1].value) {
            console.log("hi");
            window.location.replace("shopList.html");
          }
        });
      });
    }
  );
}

// Fetching users
// can be used for log in

// fetch('http://127.0.0.1:5000/get-users/')
// .then((request) => {
//     request.json()
//     .then((obj) => {
//         data = obj.data
//         console.log(data)
//     })
// })

// Fetching poducts and displaying some

// fetch("http://127.0.0.1:5000/get-products/").then((request) => {
//   request.json().then((obj) => {
//     console.log(obj);
//     data = obj.data;
//     console.log(data);
//     info.innerHTML = ``;
//     data.forEach((product) => {
//       info.innerHTML += `<div>
//         <p>Name: ${product[1]}</p>
//         <p>Price: ${product[2]}</p>
//         <p>Date: ${product[3]}</p>
//         </div>`;
//     });
//   });
// });

// Fetching poduct

// fetch('http://127.0.0.1:5000/get-product/1/')
// .then((request) => {
//     request.json()
//     .then((obj) => {
//         console.log(obj)
//         data = obj.data
//         console.log(data)
//     })
// })
