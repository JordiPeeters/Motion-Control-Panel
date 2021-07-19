var aantal = document.getElementById("aantalfuncties");
const maaktekstvakken = () =>{
    for (let i = 0; i < aantal.value; i++) {
       input = document.createElement("input");
        document.getElementsByClassName("col-md-4").appendChild(input);
    }
}