// fetch json file
const fetchJSONFile = (path, callback) => {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        if (callback) callback(data);
      }
    }
  };
  httpRequest.open("GET", path);
  httpRequest.send();
};

// onload roept functie aan die buttons laadt (pageSetup.js)
window.onload = () => {
  fetchJSONFile("php/installaties.json", function (data) {
    console.log("json loaded");
    createButtons(data);
  });
};