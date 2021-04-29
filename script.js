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
    document.title = "Home";
    homePage.style.display = "flex";
    advancedScreen.style.display = "none"
    loginScreen.style.display = "none"
};
advancedButton.onclick = () => {
    document.title = "Advanced";
    homePage.style.display = "none";
    advancedScreen.style.display = "flex"
    loginScreen.style.display = "none"
};
loginButton.onclick = () => {
    document.title = "Login";
    homePage.style.display = "none";
    advancedScreen.style.display = "none"
    loginScreen.style.display = "flex"
};

// //localstorage test
// localStorage.colorSetting = '#a4509b';

// let color = localStorage.getItem('colorSetting');

// console.log(color);

document.getElementById("readlocalstorage").onclick = ()=>{
    console.log(localStorage);
}
document.getElementById("clearlocalstorage").onclick = ()=>{
    console.log("clear local storage");
    localStorage.clear();
}