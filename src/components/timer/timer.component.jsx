import "./timer.styles.scss";

function Timer({ currentSegment, timeLeft }) {
  return (
    <div id="timer-container">
      <div id="timer-label">
        {currentSegment[0].toUpperCase() + currentSegment.slice(1)}
      </div>
      <div id="time-left">
        25:00
        {/* {Math.floor(timeLeft / 60)}:
        {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60} */}
      </div>
    </div>
  );
}

export default Timer;
