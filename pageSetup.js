let jsonData;
let installaties = [];
let homeFunctions = [];
const homePage = document.getElementById("homescreen");
const buttonAndQuestion = document.getElementsByClassName("buttonandquestion");

let currentScreen;

// create buttons from json
const createButtons = (data) => {
  homeFunctions = data.homescherm.slice();
  installaties = data.installaties.slice();

  homeFunctions.forEach((tasks) => {
    console.log("create a button");
    createHomeScreen(tasks);
  });

  // for each element in installatie JSON file maak een button
  installaties.forEach((installatie) => {
    createButton(installatie);
    createInstallationScreen(installatie);
  });
};

const createHomeScreen = (tasks) => {
  let homeScreenButton = document.createElement("button");
  homeScreenButton.className = "buttonHome";
  homeScreenButton.innerHTML = tasks.naam;
  homeScreenButton.id = tasks.id;

  homeScreenButton.onclick = () => {
    WO.run(tasks.task);
  };

  homePage.appendChild(homeScreenButton);
};

// create button per installation
const screen2 = document.getElementById("advancedscreen");

const createButton = (installatie) => {
  // create buttons
  let installationButton = document.createElement("button");
  installationButton.className = "installationbutton";
  installationButton.innerHTML = installatie.naam;
  installationButton.onclick = () => {
    let screen = document.getElementById(installatie.naam + "screen");
    screen.style.display = "flex";
    currentScreen = screen;
  };

  screen2.appendChild(installationButton);
};

// create screen per installation
let createInstallationScreen = (installatie) => {
  // create screen
  let installationScreen = document.createElement("div");
  installationScreen.className = "installationscreen";
  installationScreen.id = installatie.naam + "screen";
  installationScreen.style.display = "none";

  let screenTitle = document.createElement("p");
  screenTitle.innerHTML = installatie.naam;
  screenTitle.className = "screentitle";
  installationScreen.appendChild(screenTitle);

  // add close button
  let closeButton = document.createElement("div");
  closeButton.className = "closebutton";
  closeButton.id = installatie.naam + "closebutton";
  closeButton.innerHTML = "+";
  closeButton.onclick = () => {
    document.getElementById(installatie.naam + "screen").style.display = "none";
  };

  // for each element per installation create buttons for each function
  Object.keys(installatie).forEach((key) => {
    if (key !== "naam") {
      let onOffButton = document.createElement("button");
      onOffButton.className = "onoffbutton";
      onOffButton.innerHTML = key;
      onOffButton.onclick = () => {
        WO.run(installatie[key]);
      };
      installationScreen.appendChild(onOffButton);
    }
  });

  installationScreen.appendChild(closeButton);
  screen2.appendChild(installationScreen);
};

// on esc close window
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && currentScreen) {
    currentScreen.style.display = "none";
    currentScreen = null;
  }
});

// // screen 1 buttons
// const createButton1 = (installatie) => {
//   //buttonandquestion
//   let newbuttonandquestion = document.createElement("div");
//   newbuttonandquestion.className = "buttonandquestion";

//   //on / off button
//   let buttonHome = document.createElement("button");
//   buttonHome.className = "buttonHome";

//   if (installatie.functie == "aan") {
//     buttonHome.id = "on";
//   } else if (installatie.functie == "uit") {
//     buttonHome.id = "off";
//   } else {
//     buttonHome.id = "stop";
//   }
//   buttonHome.innerHTML = installatie.naam;
//   buttonHome.onclick = () => WO.run(installatie.task);

//   newbuttonandquestion.appendChild(buttonHome);
//   onoffbuttonsHome.appendChild(newbuttonandquestion);
// };

// // maakt een button met classname, innerHTML en onclick en append naar content
// const category1 = document.getElementById("category1");
// const category2 = document.getElementById("category2");

// const createButton = (installatie) => {
//   let installatieButton = document.createElement("button");
//   installatieButton.innerHTML = installatie.naam;

//   installatieButton.onclick = () => WO.run(installatie.task);

//   if (installatie.categorie == "computers") {
//     category1.appendChild(installatieButton);
//   } else if (installatie.categorie == "projectoren") {
//     category2.appendChild(installatieButton);
//   }

//   if (installatie.functie == "aan"){
//     installatieButton.className = "onbutton";
//   }else{
//     installatieButton.className = "offbutton";
//   }
// };
