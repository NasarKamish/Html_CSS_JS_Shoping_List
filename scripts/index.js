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

// user register

function userRegister() {
  // Geting the values in the inputs into a dictionary
  let inputs = document.querySelectorAll(".register-input");

  let json_info = [];
  inputs.forEach((input) => {
    json_info.push(input.value);
  });

  let json_dict = {
    first_name: json_info[0],
    last_name: json_info[1],
    Email: json_info[2],
    username: json_info[3],
    password: json_info[4],
  };
  console.log(json_dict);
}

// userRegister();
