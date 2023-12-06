import { checkInput, resetAll, setTestStarted } from "../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";

function TypingArea() {
  const word = useSelector((state) => state.app.input);
  const testStarted = useSelector((state) => state.app.testStarted);
  const showResults = useSelector((state) => state.app.showResults);
  const dispatch = useDispatch();
  function handleChange(e) {
    if (!testStarted) {
      dispatch(resetAll());
      dispatch(setTestStarted(true));
    } else if (showResults) {
      dispatch(resetAll());
      dispatch(setTestStarted(true));
    }
    dispatch(checkInput(e.target.value));
  }
  return (
    <input
      value={word}
      onChange={handleChange}
      type="text"
      placeholder={testStarted ? "" : "Start typing "}
      className=" border mb-3 border-dark shadow rounded p-2 form-control"
    ></input>
  );
}

export default TypingArea;
