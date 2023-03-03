export default function updateTimer(newTime) {
  const timeLeftEl = document.getElementById("time-left");
  timeLeftEl.textContent = `${
    Math.floor(newTime / 60) < 10
      ? `0${Math.floor(newTime / 60)}`
      : Math.floor(newTime / 60)
  }:${newTime % 60 < 10 ? `0${newTime % 60}` : newTime % 60}`;
}
