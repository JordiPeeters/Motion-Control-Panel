let jsonData;
let installaties = [];
let homeFunctions = [];
const homePage = document.getElementById("homescreen");
const buttonAndQuestion = document.getElementsByClassName("buttonandquestion");

let buttonPressFloat = 0;
if (localStorage.buttonpress !== null) {
  buttonPressFloat = localStorage.buttonpress;
} else {
  localStorage.buttonpress = 0;
}

let currentScreen;

// create buttons from json
const createButtons = (data) => {
  homeFunctions = data.homescherm.slice();
  installaties = data.installaties.slice();

  // for each element in data.homescherm create button
  homeFunctions.forEach((tasks) => {
    createHomeScreen(tasks);
  });

  // for each element in data.installaties create button
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
    localStorage[buttonPressFloat] = tasks.naam + " pressed";
    buttonPressFloat++;
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

    localStorage.buttonPressFloat = installatie.naam + " pressed";
    buttonPressFloat++;
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

  // create title for screen
  let screenTitle = document.createElement("p");
  screenTitle.innerHTML = installatie.naam;
  screenTitle.className = "screentitle";
  installationScreen.appendChild(screenTitle);

  // add divs per category: computers
  let computerDiv = document.createElement("div");
  computerDiv.className = "categoryDiv";
  installationScreen.appendChild(computerDiv);

  let computerDivTitle = document.createElement("p");
  computerDivTitle.innerHTML = "computers";
  computerDiv.appendChild(computerDivTitle);

  // add divs per category: projectoren
  let projectorDiv = document.createElement("div");
  projectorDiv.className = "categoryDiv";
  installationScreen.appendChild(projectorDiv);

  let projectorDivTitle = document.createElement("p");
  projectorDivTitle.innerHTML = "projectoren";
  projectorDiv.appendChild(projectorDivTitle);

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
        localStorage.buttonPressFloat = key + " pressed";
        buttonPressFloat++;
      };
      if (key.includes("computer")) {
        computerDiv.appendChild(onOffButton);
      } else {
        projectorDiv.appendChild(onOffButton);
      }
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