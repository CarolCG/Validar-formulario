/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.querySelector("form");

  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let amount = document.getElementById("amount");
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let postalCode = document.getElementById("postalCode");
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let radio3 = document.getElementById("radio3");
    let radio4 = document.getElementById("radio4");
    let textarea1 = document.getElementById("textarea1");

    // console.log(email.value);
    // console.log(amount.value);
    // console.log(firstname.value);
    // console.log(lastname.value);
    // console.log(city.value);
    // console.log(state.value);
    // console.log(postalCode.value);
    // console.log(radio1.value);
    // console.log(radio2.value);
    // console.log(radio3.value);

    let alert = document.getElementById("alert");

    if (email.value === "") {
      alert.style.display = "";
      email.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (password.value === "") {
      alert.style.display = "";
      password.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (amount.value === "") {
      alert.style.display = "";
      amount.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (firstname.value === "") {
      alert.style.display = "";
      firstname.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (lastname.value === "") {
      alert.style.display = "";
      lastname.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (city.value === "") {
      alert.style.display = "";
      city.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (state.value === "") {
      alert.style.display = "";
      state.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (postalCode.value === "") {
      alert.style.display = "";
      postalCode.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (textarea1.value === "") {
      alert.style.display = "";
      textarea1.style.backgroundColor = "pink";
    } else {
      alert.style.display = "none";
    }
    if (radio1.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
    if (radio2.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
    if (radio3.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
    if (radio4.value === "") {
      alert.style.display = "";
    } else {
      alert.style.display = "none";
    }
  }
  // form.addEventListener("sumbit", enviarDatos);
};
