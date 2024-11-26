// script.js

// Get DOM elements
const currentTimeEl = document.getElementById("currentTime");
const alarmTimeEl = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarmBtn");
const clearAlarmBtn = document.getElementById("clearAlarmBtn");
const alarmMessageEl = document.getElementById("alarmMessage");

let alarmTime = null;
let alarmTimeout = null;

// Update current time every second
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", { hour12: true });
  currentTimeEl.textContent = timeString;

  // Check if alarm time matches current time
  if (alarmTime === timeString) {
    ringAlarm();
  }
}

function ringAlarm() {
  const alarmAudio = new Audio("alarm-music.mp3");
  alarmAudio.play();
  alarmMessageEl.textContent = "Wake Up! Alarm Ringing!";
  console.log("Wake Up! Alarm Ringing!");
  alarmMessageEl.classList.remove("hidden");
  clearAlarm();
}

// Set the alarm
function setAlarm() {
  if (!alarmTimeEl.value) {
    alert("Please select a valid time for the alarm!");
    return;
  }
  alarmTime = new Date().toLocaleDateString() + " " + alarmTimeEl.value;
  alarmTime = new Date(alarmTime).toLocaleTimeString("en-US", { hour12: true });

  alarmMessageEl.textContent = "Alarm Set!";
  alarmMessageEl.classList.remove("hidden");

  console.log(`Alarm set for: ${alarmTime}`);
}

// Clear the alarm
function clearAlarm() {
  alarmTime = null;
  alarmMessageEl.classList.add("hidden");
}

// Event listeners
setAlarmBtn.addEventListener("click", setAlarm);
clearAlarmBtn.addEventListener("click", clearAlarm);

// Initialize clock
setInterval(updateTime, 1000);
