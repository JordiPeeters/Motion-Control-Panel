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
    functielabel.innerHTML = "functie " + (functieindex + 1);

    let functioninput = document.createElement("input");
    functioninput.type = "text";
    functioninput.className = "form-control";
    functioninput.name = "function" + functieindex;
    functioninput.required = "required";

    // command
    let commandlabel = document.createElement("label");
    commandlabel.innerHTML = "command " + (functieindex + 1);

    let taskinput = document.createElement("input");
    taskinput.type = "text";
    taskinput.className = "form-control";
    taskinput.name = "command" + functieindex;
    taskinput.required = "required";

    // append
    parentdiv.appendChild(functielabel);
    parentdiv.appendChild(functioninput);
    parentdiv.appendChild(commandlabel);
    parentdiv.appendChild(taskinput);

    div.appendChild(parentdiv);

    functieindex++;
  }
};


let moretasks = (id) =>{
console.log ("yrrt" + id);

}
