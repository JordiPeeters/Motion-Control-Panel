var aantal = document.getElementById("aantalfuncties");
var div = document.getElementById("form");
let functieindex = 0;
const maaktekstvakken = () => {
  for (let i = 0; i < aantal.value; i++) {
    // parent div
    let parentdiv = document.createElement("div");
    parentdiv.className = "form-group";

    // functie
    let functielabel = document.createElement("label");
    functielabel.innerHTML = "Naam Functie: " + (functieindex + 1);

    let functioninput = document.createElement("input");
    functioninput.type = "text";
    functioninput.className = "form-control";
    functioninput.name = "function" + functieindex;
    functioninput.required;

    // command
    let commandlabel = document.createElement("label");
    commandlabel.innerHTML = "Watchout Command: " + (functieindex + 1);

    let taskinput = document.createElement("input");
    taskinput.type = "text";
    taskinput.className = "form-control";
    taskinput.name = "command" + functieindex;
    taskinput.required;

    // append
    parentdiv.appendChild(functielabel);
    parentdiv.appendChild(functioninput);
    parentdiv.appendChild(commandlabel);
    parentdiv.appendChild(taskinput);

    div.appendChild(parentdiv);

    functieindex++;
  }
};

let moretasks = (id, index) => {
  let trid = "tr" + id;
  let trparent = document.getElementById(trid);
  
  let formid = "form" + id;
  console.log(formid);
  let formparent = document.getElementById(formid);
  console.log(formparent);

  let tdfunction = document.createElement("td");

  let tdfunctioninput = document.createElement("input");
  tdfunctioninput.name = "functie" + index;

  let tdcommand = document.createElement("td");


  let tdcommandinput = document.createElement("input");
  tdcommandinput.name = "command" + index;

  tdfunction.appendChild(tdfunctioninput);
  tdcommand.appendChild(tdcommandinput);

  let insertbeforebutton = document.getElementById("insertbutton" + id);
  console.log(insertbeforebutton);

  formparent.appendChild(tdfunction);
  formparent.appendChild(tdcommand);
  // trparent.insertBefore(tdcommand, insertbeforebutton);
};

function hideVoegtoe() {
  var x = document.getElementById("voegtoe");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function hideVerwijder() {
  var x = document.getElementById("verwijder");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
