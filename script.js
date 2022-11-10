const loginButton = document.querySelector(".login-button");
const loginWindow = document.querySelector(".login-window");

loginButton.addEventListener("click", login);

function login() {
  // loginWindow.classList.add("active");
  loginWindow.hidden = false;
}
