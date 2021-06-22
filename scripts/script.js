// noodstop function

let Noodstop = () => {
  WO.gotoControlCue("", "noodstop");
  userLog("noodstop");
};

//buttons
let homeButton = document.getElementById("home");
let advancedButton = document.getElementById("advanced");
let loginButton = document.getElementById("login");
let adminButton = document.getElementById("admin");

//screens
let homeScreen = document.getElementById("onoffbuttonsHome");
let advancedScreen = document.getElementById("advancedbuttonscontainer");
let loginScreen = document.getElementById("loginscreen");
let adminScreen = document.getElementById("adminscreen");

//onclicks page navigation
homeButton.onclick = GoToHome =() => {
  document.title = "Home";
  homePage.style.display = "flex";
  advancedScreen.style.display = "none";
  loginScreen.style.display = "none";
  adminScreen.style.display = "none";
};
advancedButton.onclick = GoToAdvanced = () => {
  document.title = "Advanced";
  homePage.style.display = "none";
  advancedScreen.style.display = "flex";
  loginScreen.style.display = "none";
  adminScreen.style.display = "none";
};
if (adminButton != null){
  adminButton.onclick = GoToAdmin = () => {
    storageToTextArea();
    document.title = "Admin";
    homePage.style.display = "none";
    advancedScreen.style.display = "none";
    loginScreen.style.display = "none";
    adminScreen.style.display = "flex";
  };
} 
if (loginButton != null){
  loginButton.onclick = () => {
    document.title = "Login";
    homePage.style.display = "none";
    advancedScreen.style.display = "none";
    loginScreen.style.display = "flex";
    adminScreen.style.display = "none";
  };
}

// localstorage

document.getElementById("clearlocalstorage").onclick = () => {
  if (confirm("Clear user log?")) {
    localStorage.clear();
    storageToTextArea();
  }
};

let userLogTextField = document.getElementById("userlogtext");
let progressbar = document.getElementById("progress");
let progresstext = document.getElementById("progresstext");

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
  //scroll to bottom in user log text field, after delay of 10ms
  setTimeout(() => { userLogTextField.scrollTop = userLogTextField.scrollHeight;  }, 10);
  

  let storageprogress = localStorageSpace() / 5000;

  if (Number.isNaN(storageprogress)){
    progressbar.style.width = "0%";
  progresstext.innerHTML = "0%";
  }
  else{
    progresstext.innerHTML = storageprogress.toFixed(4) + "%";
    if(storageprogress<2){
      progressbar.style.width = "2%";
    } else{
      progressbar.style.width = storageprogress.toFixed(4) + "%";
    }
  }
  console.log(storageprogress);
};

// localstorage size
var localStorageSpace  = () =>{
  var allStrings = '';
  for(var key in window.localStorage){
      if(window.localStorage.hasOwnProperty(key)){
          allStrings += window.localStorage[key];
      }
  }
  return allStrings ? 3 + ((allStrings.length*16)/(8*1024)): 'Empty (0 KB)';
};