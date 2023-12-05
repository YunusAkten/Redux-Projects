import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowResults } from "../redux/appSlice";
function Timer() {
  const [time, setTime] = useState(3);
  const [timerStarted, setTimerStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const dispatch = useDispatch();
  const startTime = () => {
    if (!timerStarted) {
      dispatch(setShowResults(false));
      setTimerStarted(true);
      const id = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      return;
    }
  };
  useEffect(() => {
    if (time < 0) {
      dispatch(setShowResults(true));
      setTime(3);
      setTimerStarted(false);
      clearInterval(intervalId);
    }
  }, [time, intervalId, dispatch]);
  return (
    <span
      onClick={() => startTime()}
      style={{ cursor: "pointer", width: "70px" }}
      className="border border-4 fs-3   float-end text-center px-2 rounded border-warning  inline  "
    >
      {time}
    </span>
  );
}

export default Timer;
