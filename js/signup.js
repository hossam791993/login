"use strict";
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signup = document.querySelector(".signup-btn");

signup.addEventListener("click", function (e) {
  console.log(e);
  const userInfo = {
    userName: name.value,
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
});
