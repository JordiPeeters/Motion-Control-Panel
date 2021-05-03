//buttons
let homeButton = document.getElementById("home");
let advancedButton = document.getElementById("advanced");
let loginButton = document.getElementById("login");
let adminButton = document.getElementById("admin");

//screens
let homeScreen = document.getElementById("onoffbuttonsHome");
let advancedScreen = document.getElementById("advancedscreen");
let loginScreen = document.getElementById("loginscreen");
let adminScreen = document.getElementById("adminscreen");

//onclicks
homeButton.onclick = () => {
  document.title = "Home";
  homePage.style.display = "flex";
  advancedScreen.style.display = "none";
  loginScreen.style.display = "none";
  adminScreen.style.display = "none";
};
advancedButton.onclick = () => {
  document.title = "Advanced";
  homePage.style.display = "none";
  advancedScreen.style.display = "flex";
  loginScreen.style.display = "none";
  adminScreen.style.display = "none";
};
loginButton.onclick = () => {
  document.title = "Login";
  homePage.style.display = "none";
  advancedScreen.style.display = "none";
  loginScreen.style.display = "flex";
  adminScreen.style.display = "none";
};
adminButton.onclick = () => {
  storageToTextArea();
  document.title = "Admin";
  homePage.style.display = "none";
  advancedScreen.style.display = "none";
  loginScreen.style.display = "none";
  adminScreen.style.display = "flex";
};

// localstorage

document.getElementById("readlocalstorage").onclick = () => {
  console.log(localStorage);
};
document.getElementById("clearlocalstorage").onclick = () => {
  console.log("clear local storage");
  localStorage.clear();
};

let userLogTextField = document.getElementById("userlogtext");

const storageToTextArea = () => {
  if (userLogTextField.value !== null) {
    userLogTextField.value = null;
  }
  for (let i = 0; i - 1 < localStorage.length; i++) {
    const element = localStorage[i];
    if (element !== undefined) {
      userLogTextField.value += element + "\n";
    }
  }
};