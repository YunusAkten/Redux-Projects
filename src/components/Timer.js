import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchWords,
  resetAll,
  setShowResults,
  setTestStarted,
} from "../redux/appSlice";

function Timer() {
  const [time, setTime] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);
  const testStarted = useSelector((state) => state.app.testStarted);
  const [intervalId, setIntervalId] = useState(null);
  const dispatch = useDispatch();

  const startTime = () => {
    if (!timerStarted) {
      let id = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      setIntervalId(id);
      setTimerStarted(true);
    }
  };

  useEffect(() => {
    if (time === 0) {
      dispatch(setShowResults(true));
      setTime(60);
      setTimerStarted(false);
      dispatch(setTestStarted(false));
      clearInterval(intervalId);
    }
  }, [time, intervalId, dispatch]);

  useEffect(() => {
    if (testStarted && !timerStarted) {
      startTime();
    }
  }, [testStarted, timerStarted]);

  return (
    <div>
      <i
        style={{ width: "70px", cursor: "pointer" }}
        onClick={() => {
          dispatch(fetchWords());
          dispatch(resetAll());
        }}
        className="border border-4  fs-3 float-end text-center  rounded mx-2 bi  bi-arrow-repeat"
      ></i>
      <span
        style={{ width: "70px" }}
        className="border border-4 fs-3 float-end text-center px-2 rounded border-warning inline"
      >
        {time}{" "}
      </span>
    </div>
  );
}

export default Timer;
