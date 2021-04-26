//buttons
let homeButton = document.getElementById("home");
let advancedButton = document.getElementById("advanced");
let loginButton = document.getElementById("login");

//screens
let homeScreen = document.getElementById("onoffbuttonsHome");
let advancedScreen = document.getElementById("advancedscreen");
let loginScreen = document.getElementById("loginscreen");

//onclicks
homeButton.onclick = () => {
    homeScreen.style.display = "flex";
    advancedScreen.style.display = "none"
    loginScreen.style.display = "none"
};
advancedButton.onclick = () => {
    homeScreen.style.display = "none";
    advancedScreen.style.display = "flex"
    loginScreen.style.display = "none"
};
loginButton.onclick = () => {
    homeScreen.style.display = "none";
    advancedScreen.style.display = "none"
    loginScreen.style.display = "flex"
};