"use strict";
const passwordLogin = document.getElementById("password-login");
const emailLogin = document.getElementById("email-login");
const loginBtn = document.querySelector(".login-btn");
const name = document.getElementById("name-signup");
const email = document.getElementById("email-signup");
const password = document.getElementById("password-signup");
const signupBtn = document.querySelector(".signup-btn");
const welcomeText = document.getElementById("main-welcome");
const logoutBtn = document.getElementById("logout");

let usersArr = [];

if (localStorage.getItem("users") == null) {
  usersArr = [];
} else {
  usersArr = JSON.parse(localStorage.getItem("users"));
}

const userName = JSON.parse(localStorage.getItem("userName"));

console.log(userName);
if (userName) {
  welcomeText.innerHTML = "Welcome " + userName;
}

function emptyArr() {
  for (const userArr of usersArr) {
    if (email.value.toLowerCase() == userArr.email.toLowerCase()) {
      return false;
    } else {
      return true;
    }
  }
}
// Sign up function
function signup() {
  if (email.value == "" || password.value == "" || name.value == "") {
    document.getElementById("success").classList.add("text-danger");
    document.getElementById("success").classList.remove("text-success");
    document.getElementById("success").innerHTML = "All Inputs are Required";
  } else if (emptyArr() == false) {
    document.getElementById("success").classList.add("text-danger");
    document.getElementById("success").classList.remove("text-success");
    document.getElementById("success").innerHTML = "email already exists";
  } else {
    const userInfo = {
      userName: name.value,
      email: email.value,
      password: password.value,
    };
    usersArr.push(userInfo);
    localStorage.setItem("users", JSON.stringify(usersArr));
    document.getElementById("success").classList.remove("text-danger");
    document.getElementById("success").classList.add("text-success");
    document.getElementById("success").innerHTML = "Success";
    console.log(usersArr);
  }
}

// Login function
function isEmpty() {
  if (emailLogin.value == "" || passwordLogin.value == "") {
    return false;
  } else {
    return true;
  }
}

function login() {
  console.log(usersArr);
  if (isEmpty() === false) {
    document.getElementById("hint").innerHTML = "All Inputs are Required";
    return false;
  } else {
    console.log(emailLogin.value, passwordLogin.value);
    for (const { userName, email, password } of usersArr) {
      if (
        emailLogin.value.toLowerCase() == email.toLowerCase() &&
        passwordLogin.value.toLowerCase() == password.toLowerCase()
      ) {
        localStorage.setItem("userName", JSON.stringify(userName));
        loginBtn.setAttribute("href", "./home.html");
      } else {
        console.log("here");
        document.getElementById("hint").innerHTML =
          "incorrect email or password";
      }
    }
  }
}
// logout function
function logout() {
  localStorage.removeItem("userName");
  logoutBtn.setAttribute("href", "./index.html");
}
