import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateText } from "../redux/appslice";
function UserInput() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.app.text);
  return (
    <div className="  border p-0 m-2 rounded border-2 border-dark col-md-4">
      <textarea
        onChange={(e) => dispatch(updateText(e.target.value))}
        className="form-control mb-0 pb-0   "
        rows={20}
        value={text}
        style={{ resize: "none" }}
      ></textarea>
    </div>
  );
}

export default UserInput;
