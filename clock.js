function updateClock() {
    var now = new Date();
    var clockElement = document.getElementById("clock");
    clockElement.innerHTML = now.toLocaleTimeString();
  }
  
  setInterval(updateClock, 1000); // update every 1 second
  updateClock();
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var clockElement = document.getElementById("clock");
    clockElement.innerHTML = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
  }


