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


//watchout functions

var states = {'': true, 'Test': true, 'BAnnaan': true, 'Timeline 5': true};

function send(message) {
  try {
    var response = WOsocket.send(message);
    console.log("Sent : " + message);
  } catch (exception) {
    console.log(exception);
  }
}

function toggle(timeline) {
  if (states[timeline] == true) {
    halt(timeline);
  } else {
    run(timeline);
  }
}

function kill(timeline) {
  send('kill "' + timeline + '"\n');
  states[timeline] = false;
}

function run(timeline) {
  send('run "' + timeline + '"\n');
  states[timeline] = true;
}

function halt(timeline) {
  send('halt "' + timeline + '"\n');
  states[timeline] = false;
}

function gotoControlCue(timeline, command) {
  send('gotoControlCue "' + command + '" false ' + timeline + "\n");
}

function getStatus(timeline) {
  send('getStatus \n');
  console.log(states);
}

function ping(){
  send('ping \n');
}

function stopAll() {
  Object.keys(states).forEach(function (item) {
    console.log(item);
    kill(item);
  });
}

function reset(timeline){
  send('reset "' + timeline + '"\n');

}

function goOnline(){
  send('online true \n');
}
function goOffline(){
  send('online false \n');
}