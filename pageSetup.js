let jsonData;
let installaties = [];
const onoffbuttonsHome = document.getElementById("onoffbuttonsHome");
const buttonAndQuestion = document.getElementsByClassName("buttonandquestion");

//screen 2 content
const content2 = document.getElementById("advancedscreen");

const createButtons = (data) => {
  installaties = data.installaties.slice();

  // for each element in installatie JSON file maak een button
  installaties.forEach((installatie) => {
    if (installatie.scherm == "1") {
      createButton1(installatie);
    } else if (installatie.scherm == "2") {
      createButton(installatie);
    } else {
      console.log("element3 not yet built");
    }
  });
};

// screen 1 buttons
const createButton1 = (installatie) => {
  //buttonandquestion
  let newbuttonandquestion = document.createElement("div");
  newbuttonandquestion.className = "buttonandquestion";

  //on / off button
  let buttonHome = document.createElement("button");
  buttonHome.className = "buttonHome";

  if (installatie.functie == "aan") {
    buttonHome.id = "on";
  } else if (installatie.functie == "uit") {
    buttonHome.id = "off";
  } else {
    buttonHome.id = "stop";
  }
  buttonHome.innerHTML = installatie.naam;
  buttonHome.onclick = () => WO.run(installatie.task);

  newbuttonandquestion.appendChild(buttonHome);
  onoffbuttonsHome.appendChild(newbuttonandquestion);
};

// maakt een button met classname, innerHTML en onclick en append naar content
const category1 = document.getElementById("category1");
const category2 = document.getElementById("category2");

const createButton = (installatie) => {
  let installatieButton = document.createElement("button");
  installatieButton.innerHTML = installatie.naam;

  installatieButton.onclick = () => WO.run(installatie.task);

  if (installatie.categorie == "computers") {
    category1.appendChild(installatieButton);
  } else if (installatie.categorie == "projectoren") {
    category2.appendChild(installatieButton);
  }

  if (installatie.functie == "aan"){
    installatieButton.className = "onbutton";
  }else{
    installatieButton.className = "offbutton";
  }
};
