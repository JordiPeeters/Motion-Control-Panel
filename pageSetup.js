let jsonData;
let installaties = [];
const onoffbuttonsHome = document.getElementById("onoffbuttonsHome");
const content = document.getElementById("content");

const createButtons = (data) => {
  installaties = data.installaties.slice();

  // for each element in installatie JSON file maak een button
  installaties.forEach((installatie) => {
    if (installatie.scherm == "1") {
      createButton1(installatie);
    } else {
      createButton(installatie);
    }
  });
};

// maakt een button met classname, innerHTML en onclick en append naar content
const createButton = (installatie) => {
  let installatieButton = document.createElement("button");
  // installatieButton.className = "buttonHome";
  installatieButton.innerHTML = installatie.naam;

  installatieButton.onclick = () => WO.run(installatie.task);

  content.appendChild(installatieButton);
};

const createButton1 = (installatie) => {
  let buttonDiv = document.createElement("div");
  buttonDiv.className = "buttonandquestion";
  buttonDiv.id = "on";
  let installatieButton = document.createElement("button");
  installatieButton.className = "buttonHome";
  installatieButton.innerHTML = installatie.naam;

  installatieButton.onclick = () => WO.run(installatie.task);

  onoffbuttonsHome.appendChild(buttonDiv);
  buttonDiv.appendChild(installatieButton);
};
