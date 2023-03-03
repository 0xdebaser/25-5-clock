import { useState } from "react";

import rooster from "./mixkit-short-rooster-crowing-2470.wav";
import "./App.css";
import LengthBox from "./components/lengthBox/lengthBox.component";
import Timer from "./components/timer/timer.component";
import TimerControls from "./components/timer/timerControls.component";

let alarm;

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [currentSegment, setCurrentSegment] = useState("session");
  const [running, setRunning] = useState(false);

  // async function startStopHandler() {
  //   setRunning(!running);
  //   alarm = document.getElementById("beep");
  //   if (running) countDown();
  // }

  // function resetHandler() {
  //   alarm = document.getElementById("beep");
  //   setRunning(false);
  //   setBreakLength(5);
  //   setSessionLength(25);
  //   setTimeLeft(25 * 60);
  //   setCurrentSegment("session");
  //   alarm.pause();
  //   alarm.load();
  // }

  // async function countDown() {
  //   await new Promise((r) => setTimeout(r, 100));
  //   if (timeLeft === 0) {
  //     alarm.play();
  //     if (currentSegment === "session") {
  //       console.log("switching to break");
  //       setCurrentSegment("break");
  //       setTimeLeft(breakLength * 60);
  //     } else {
  //       console.log("switching to session");
  //       setCurrentSegment("session");
  //       setTimeLeft(sessionLength * 60);
  //     }
  //   } else setTimeLeft(timeLeft - 1);
  //   console.log(running);
  //   if (running) await countDown();
  // }

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <LengthBox
        id="session"
        breakLength={breakLength}
        running={running}
        setBreakLength={setBreakLength}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        setTimeLeft={setTimeLeft}
      />
      <LengthBox
        id="break"
        breakLength={breakLength}
        running={running}
        setBreakLength={setBreakLength}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        setTimeLeft={setTimeLeft}
      />
      {/* <LengthBox id="break" /> */}
      {/* <div id="timer-container">
        <div id="timer-label">
          {currentSegment[0].toUpperCase() + currentSegment.slice(1)}
        </div>
        <div id="time-left">
          {`${Math.floor(timeLeft / 60)}:${
            timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60
          }`}
        </div>
      </div> */}
      <Timer currentSegment={currentSegment} timeLeft={timeLeft} />
      <TimerControls
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        setCurrentSegment={setCurrentSegment}
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        setRunning={setRunning}
      />
      {/* <div className="timer-controls-container">
        <button id="start_stop" onClick={startStopHandler}>
          {running ? "⏸" : "▶"}
        </button>
        <button id="reset" onClick={resetHandler}>
          🔄
        </button> */}
      {/* </div> */}
      <audio id="beep" preload="auto" src={rooster} type="audio/wav" />
    </div>
  );
}

export default App;
