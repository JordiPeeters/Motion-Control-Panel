var states = { "": true };

const WO = (function () {
  const allesAan = () => {
    run("ALLES AAN");

    // startscene reference maken en tijd instellen
    // setTimeout(startscene(), 0);
  };
  const run = (timeline) => {
    send('run "' + timeline + '"\n');
    states[timeline] = true;
  };
  
  const toggleTimeline = (timeline) => {
    if (states[timeline] == true) {
      halt(timeline);
    } else {
      run(timeline);
    }
  };

  return {
    allesAan: allesAan,
    run: run,
    toggleTimeline: toggleTimeline
  };
})();


const send = (message) => {
  try {
    var response = WOsocket.send(message);
    console.log("Sent : " + message);
  } catch (exception) {
    console.log(exception);
  }
};


function kill(timeline) {
  send('kill "' + timeline + '"\n');
  states[timeline] = false;
}

function halt(timeline) {
  send('halt "' + timeline + '"\n');
  states[timeline] = false;
}

function gotoControlCue(timeline, command) {
  send('gotoControlCue "' + command + '" false ' + timeline + "\n");
}

function getStatus(timeline) {
  send("getStatus \n");
  console.log(states);
}

function ping() {
  send("ping \n");
}

function stopAll() {
  Object.keys(states).forEach(function (item) {
    console.log(item);
    kill(item);
  });
}

function reset(timeline) {
  send('reset "' + timeline + '"\n');
}

function goOnline() {
  send("online true \n");
}
function goOffline() {
  send("online false \n");
}
