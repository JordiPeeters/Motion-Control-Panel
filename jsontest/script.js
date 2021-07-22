var aantal = document.getElementById("aantalfuncties");
var div =  document.getElementsByClassName("col-md-4")[0];
const maaktekstvakken = () =>{
    for (let i = 0; i < aantal.value; i++) {
        console.log("yeet")
       let input = document.createElement("input");
      div.appendChild(input);
    }
}