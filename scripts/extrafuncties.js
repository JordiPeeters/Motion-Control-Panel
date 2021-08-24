// onload
let allecomputersextra;
let createButtonsOverig = () => {
  setTimeout(() => {
    allecomputersextra = document.getElementById("allecomputersother");
    offlineonline();
    uitlijngrid();
    startshow();
  }, 100);
};

function startshow() {
  let startshow = document.createElement("button");
  startshow.className = "onoffbutton";
  startshow.innerHTML = "start show";
  startshow.onclick = () => {
    WO.gotoControlCue("", "START SHOW");
    userLog("start show");
  };
  allecomputersextra.appendChild(startshow);
}

function uitlijngrid() {
  let uitlijngrid = document.createElement("button");
  uitlijngrid.className = "onoffbutton";
  uitlijngrid.innerHTML = "uitlijngrid";

  uitlijngrid.onclick = () => {
    // task
    WO.gotoTime(0);
    // user log
    userLog("uitlijngrid");
  };
  allecomputersextra.appendChild(uitlijngrid);
}

function offlineonline() {
  let offlineonline = document.createElement("button");
  offlineonline.className = "onoffbutton";
  offlineonline.innerHTML = "offline -> online";
  offlineonline.onclick = () => {
    WO.goOffline();
    setTimeout(function () {
      //your code to be executed after 1 second
      WO.goOnline();
    }, 100);
    userLog("offline -> online");
  };

  allecomputersextra.appendChild(offlineonline);
}
