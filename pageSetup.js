let jsonData;
let installaties = [];
const content = document.getElementById("content");

const createButtons = (data) => {
  installaties = data.installaties.slice();

  // for each element in installatie JSON file maak een button
  installaties.forEach((installatie) => {
    createButton(installatie);
  });
};

// maakt een button met classname, innerHTML en onclick en append naar content
function createButton(installatie) {
  let installatieButton = document.createElement("button");
  installatieButton.className = "installatieButton";
  installatieButton.innerHTML = installatie.naam;

  installatieButton.onclick = () => WO.run(installatie.task);

  content.appendChild(installatieButton);
}
