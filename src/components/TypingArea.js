import { checkInput } from "../redux/appSlice";
import { useDispatch, useSelector } from "react-redux";

function TypingArea() {
  const word = useSelector((state) => state.app.input);
  const dispatch = useDispatch();
  return (
    <input
      value={word}
      onChange={(e) => dispatch(checkInput(e.target.value))}
      type="text"
      placeholder="Start typing..."
      className=" border mb-3 border-dark shadow rounded form-control"
    ></input>
  );
}

export default TypingArea;
