var host = "ws://127.0.0.1:3040"; // poort waar watchout mee verbindt
var WOsocket = new WebSocket(host);

WOsocket.onopen = function () {
  console.log("Socket Status: " + WOsocket.readyState + " (open)");
  ping();
};

WOsocket.onmessage = function (msg) {
  console.log("Received: " + msg.data);
  console.log(msg);
};

WOsocket.onclose = function () {
  console.log("Socket Status: " + WOsocket.readyState + " (Closed)");
};

WOsocket.onerror = function (event){
  // alert("Geen verbinding met Watchout, open Watchout en refresh pagina");
};