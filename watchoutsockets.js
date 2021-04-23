var host = "ws://127.0.0.1:3040";
var WOsocket = new WebSocket(host);

WOsocket.onopen = function () {
  console.log("Socket Status: " + WOsocket.readyState + " (open)");
  ping();
};

WOsocket.onmessage = function (msg) {
  console.log("Received: " + msg.data);
};

WOsocket.onclose = function () {
  console.log("Socket Status: " + WOsocket.readyState + " (Closed)");
};