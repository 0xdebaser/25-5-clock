import "./timerControls.styles.scss";
import updateTimer from "../../utils/updateTimer";

let alarm, segment, timer;
let running = false;

function TimerControls({
  breakLength,
  setBreakLength,
  setCurrentSegment,
  sessionLength,
  setSessionLength,
  timeLeft,
  setTimeLeft,
  setRunning,
}) {
  async function startStopHandler() {
    alarm = document.getElementById("beep");
    segment = "session";
    timer = timeLeft;
    running = !running;
    setRunning(running);
    console.log("running:", running);
    while (running) {
      // const timeLeftEl = document.getElementById("time-left");
      // timeLeftEl.textContent = `${Math.floor(timeLeft / 60)}:${
      //   timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60
      // }`;
      await countDown();
    }
  }

  function resetHandler() {
    alarm = document.getElementById("beep");
    running = false;
    setRunning(running);
    setBreakLength(5);
    setSessionLength(25);
    updateTimer(25 * 60);
    setTimeLeft(25 * 60);
    setCurrentSegment("session");
    alarm.pause();
    alarm.load();
  }

  async function countDown() {
    await new Promise((r) => setTimeout(r, 1000));
    if (timer === 0) {
      alarm.play();
      if (segment === "session") {
        console.log("switching to break");
        segment = "break";
        timer = breakLength * 60;
      } else {
        console.log("switching to session");
        segment = "session";
        timer = sessionLength * 60;
      }
    } else {
      timer--;
    }
    console.log("timer:", timer);
    if (running) {
      updateTimer(timer);
      setTimeLeft(timer);
      setCurrentSegment(segment);
      await new Promise((r) => setTimeout(r, 50));
      if (timer === 0) alarm.play();
    }
  }

  return (
    <div className="timer-controls-container">
      <button id="start_stop" onClick={startStopHandler}>
        {running ? "⏸" : "▶"}
      </button>
      <button id="reset" onClick={resetHandler}>
        🔄
      </button>
    </div>
  );
}

export default TimerControls;
