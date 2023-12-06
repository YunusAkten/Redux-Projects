import React from "react";
import { useSelector } from "react-redux";
function Results() {
  const showResults = useSelector((state) => state.app.showResults);
  const rightWords = useSelector((state) => state.app.rightWords);
  const wrongWords = useSelector((state) => state.app.wrongWords);
  const rightKeyStrokes = useSelector((state) => state.app.rightKeyStrokes);
  const wrongKeyStrokes = useSelector((state) => state.app.wrongKeyStrokes);

  return (
    <div>
      {showResults && (
        <div
          id="results"
          className=" fixed-top mt-3 mx-auto  z-1  col-12 col-md-6 col-lg-4  p-4 rounded  "
        >
          <h3>Results </h3>
          <div className="text-center">
            <h4>
              <span className=" wpm">WPM: </span>
              {rightWords}
            </h4>
            <p>(Words per minute)</p>
          </div>
          <div className="row">
            <h5 className="mt-2 d-inline col-8 result-heading ">Words: </h5>{" "}
            <span className="text-success mx-2 fs-4  col-1  inline">
              {rightWords}
            </span>
            <span className="col-1 fs-5 ">|</span>
            <span className="text-danger px-1 col-1 fs-4">{wrongWords}</span>
          </div>
          <div className="row  ">
            <h5 className=" col-8  mt-2 result-heading d-inline">
              Keystrokes:{" "}
            </h5>
            <span className="col-1 mx-2  fs-4 text-success">
              {rightKeyStrokes}
            </span>
            <span className="col-1 fs-5">|</span>{" "}
            <span className="fs-4 col-1 px-1 text-danger">
              {wrongKeyStrokes}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
