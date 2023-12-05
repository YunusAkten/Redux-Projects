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
          className=" fixed-top mt-3 mx-auto    col-6 col-md-3 p-4 rounded  "
        >
          <h2>Results </h2>
          <div className="text-center">
            <h3>
              <span className=" wpm">WPM: </span>
              {rightWords}
            </h3>
            <p>(Words per minute)</p>
          </div>
          <div className="row">
            <h4 className="mt-2 d-inline col-8 result-heading ">Words: </h4>{" "}
            <span className="text-success fs-3  col-1  inline">
              {rightWords}
            </span>
            <span className="col-1 fs-4 ">|</span>
            <span className="text-danger px-1 col-1 fs-3">{wrongWords}</span>
          </div>
          <div className="row  ">
            <h4 className=" col-8  mt-2 result-heading d-inline">
              Keystrokes:{" "}
            </h4>
            <span className="col-1   fs-3 text-success">{rightKeyStrokes}</span>
            <span className="col-1 fs-4">|</span>{" "}
            <span className="fs-3 col-1 px-1 text-danger">
              {wrongKeyStrokes}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
