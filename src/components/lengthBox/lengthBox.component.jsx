import "./lengthBox.styles.scss";
import updateTimer from "../../utils/updateTimer";

function LengthBox({
  id,
  breakLength,
  running,
  setBreakLength,
  sessionLength,
  setSessionLength,
  setTimeLeft,
}) {
  const length = id === "session" ? sessionLength : breakLength;

  return (
    <div className="lengthBoxContainer">
      <div id={`${id}-label`} className="length-box-container">
        {`${id[0].toUpperCase() + id.slice(1)}`}&nbsp;Length
      </div>
      <br />
      <button
        id={`${id}-decrement`}
        onClick={() => {
          if (length > 1 && !running) {
            const newLength = length - 1;
            if (id === "session") {
              setTimeLeft(newLength * 60);
              updateTimer(newLength * 60);
              setSessionLength(newLength);
            } else setBreakLength(newLength);
          }
        }}
      >
        👇
      </button>
      <div id={`${id}-length`} className="segment-length">
        {length}
      </div>
      <button
        id={`${id}-increment`}
        onClick={() => {
          if (length < 60 && !running) {
            const newLength = length + 1;
            if (id === "session") {
              setTimeLeft(newLength * 60);
              setSessionLength(newLength);
              updateTimer(newLength * 60);
            } else setBreakLength(newLength);
          }
        }}
      >
        ☝
      </button>
    </div>
  );
}

export default LengthBox;
