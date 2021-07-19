let jsonData;
let installaties = [];
let homeFunctions = [];
let scenes = [];
const homePage = document.getElementById("homescreen");
let currentScreen;

// page setup
// __________
const createButtons = (data) => {
  homeFunctions = data.homescherm.slice();
  scenes = data.scenes.slice();
  installaties = data.installaties.slice();

  // for each element in data.homescherm create button
  homeFunctions.forEach((tasks) => {
    createHomeScreen(tasks);
  });

  // for eacht element in data.scenes create button
  scenes.forEach((scene) => {
    createSceneButtons(scene);
  });

  // for each element in data.installaties create button
  installaties.forEach((installatie) => {
    createButton(installatie);
    createInstallationScreen(installatie);
  });
};

// buttons for home screen
//________________________

var homescreenbuttonscontainer = document.getElementById(
  "homescreenbuttonscontainer"
);

var isOnline = false;
const createHomeScreen = (tasks) => {
  // buttons

  let homeScreenButton = document.createElement("button");
  homeScreenButton.className = "buttonHome";
  homeScreenButton.innerHTML = tasks.naam;
  homeScreenButton.id = tasks.id;

  if (tasks.id == "cue") {
    homeScreenButton.onclick = () => {
      // task
      WO.gotoControlCue("", tasks.task);
      // user log
      userLog(tasks);
    };
  } else if (tasks.id == "online") {
    homeScreenButton.onclick = () => {
      if (confirm("Offline en weer online gaan?")) {
        // go offline and online after one second
        WO.goOffline;
        setTimeout(function () {
          WO.goOnline;
        }, 1000);
      }
    };
  } else {
    homeScreenButton.onclick = () => {
      if (tasks.id == "off") {
        if (confirm("Alles in Motion uit zetten?")) {
          WO.run(tasks.task);
          userLog(tasks);
        }
      } else {
        // task
        WO.run(tasks.task);

        // user log
        userLog(tasks);
      }
    };
  }
  homescreenbuttonscontainer.appendChild(homeScreenButton);
};

// create buttons for scene selection

var scenebuttonscontainer = document.getElementById("scenebuttonscontainer");

const createSceneButtons = (scene) => {
  // button and text div
  let sceneButtonAndText = document.createElement("div");
  sceneButtonAndText.className = "scenebuttonandtext";

  //button
  let sceneButton = document.createElement("button");
  sceneButton.className = "scenebutton";
  sceneButton.innerHTML = scene.cue;
  sceneButton.onclick = () => {
    userLog(scene);
    WO.gotoControlCue("", scene.cue);
  };

  //text
  let sceneText = document.createElement("p");
  sceneText.innerHTML = scene.naam;

  //append
  sceneButtonAndText.appendChild(sceneButton);
  sceneButtonAndText.appendChild(sceneText);
  scenebuttonscontainer.appendChild(sceneButtonAndText);
};

// create button per installation
// ______________________________
const screen2 = document.getElementById("advancedbuttonscontainer");

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
// ______________________________
let createInstallationScreen = (installatie) => {
  // create screen
  let installationScreen = document.createElement("div");
  installationScreen.className = "installationscreen";
  installationScreen.id = installatie.naam + "screen";
  installationScreen.style.display = "none";

  // create title for screen
  let screenTitleDiv = document.createElement("div");
  screenTitleDiv.className = "screentitlediv";
  screenTitleDiv.onclick = () => {
    document.getElementById(installatie.naam + "screen").style.display = "none";
  };

  let screenTitle = document.createElement("p");
  screenTitle.innerHTML = installatie.naam;
  screenTitle.className = "screentitle";
  screenTitleDiv.appendChild(screenTitle);
  installationScreen.appendChild(screenTitleDiv);

  // add close button
  let closeButton = document.createElement("div");
  closeButton.className = "closebutton";
  closeButton.id = installatie.naam + "closebutton";
  closeButton.innerHTML = "+";

  screenTitleDiv.appendChild(closeButton);

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

  // add divs per category: other
  let otherDiv = document.createElement("div");
  otherDiv.className = "categoryDiv";
  installationScreen.appendChild(otherDiv);

  let otherDivTitle = document.createElement("p");
  otherDivTitle.innerHTML = "overig";
  otherDiv.appendChild(otherDivTitle);

  // for each element per installation create buttons for each function
  Object.keys(installatie).forEach((key) => {
    if (key !== "naam") {
      let onOffButton = document.createElement("button");
      onOffButton.className = "onoffbutton";
      onOffButton.innerHTML = key;
      onOffButton.onclick = () => {
        // task
        WO.run(installatie[key]);

        // user log
        userLog(installatie, key);
        //  localStorage[localStorage.length + 1] = installatie.naam + " - " + key + " pressed";
        // buttonPressFloat++;
      };
      if (key.includes("computer")) {
        computerDiv.appendChild(onOffButton);
      } else if (key.includes("projector")) {
        projectorDiv.appendChild(onOffButton);
      } else {
        otherDiv.appendChild(onOffButton);
      }
    }
  });

  screen2.appendChild(installationScreen);
};

// on esc close window
// __________________
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && currentScreen) {
    currentScreen.style.display = "none";
    currentScreen = null;
  }
  if (event.key === "1") {
    GoToHome();
  }
  if (event.key === "2") {
    GoToAdvanced();
  }
  if (event.key === "3") {
    GoToAdmin();
  }
});

// userlog function
// _______________

let localstorageString;
let timeWhenPressed;

function userLog(tasks, key = "") {
  if (typeof tasks === "string") {
    localstorageString = tasks + " pressed";
  } else if (key != "") {
    localstorageString = tasks.naam + " - " + key + " pressed";
  } else {
    localstorageString = tasks.naam + " pressed";
  }
  timeWhenPressed =
    d.toString() +
    "/" +
    mon.toString() +
    " - " +
    addZero(h).toString() +
    ":" +
    addZero(m).toString() +
    ":" +
    addZero(s).toString() +
    " : ";

  localStorage[localStorage.length + 1] = timeWhenPressed + localstorageString;
}
