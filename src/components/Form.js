import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchParagraphText, setFormat } from "../redux/appSlice";
function Form() {
  const [paragraphNumber, setParagraphNumber] = useState(4);
  const format = useSelector((state) => state.app.format);
  const handleChange = (e) => {
    if (e.target.name === "paragraphs" && e.target.value) {
      setParagraphNumber(e.target.value);
      dispatch(fetchParagraphText(e.target.value));
    } else if (e.target.name === "format") {
      if (e.target.value === "true") {
        dispatch(setFormat("html"));
        dispatch(fetchParagraphText(paragraphNumber));
      } else {
        setFormat("text");
        dispatch(fetchParagraphText(paragraphNumber));
      }
    }
  };
  const dispatch = useDispatch();
  return (
    <div>
      <form className="row " onChange={handleChange}>
        <div className="col-12 col-md-4 col-lg-2">
          <label className=" lead mt-4 mb-2">Paragraphs </label>
          <br />
          <input
            className=" "
            type="number"
            name="paragraphs"
            id="paragraphs"
            min="1"
            max="99"
            value={paragraphNumber}
            onChange={(e) => {
              if (e.target.value) {
                setParagraphNumber(e.target.value);
              }
            }}
          />
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <label className=" lead mt-4 mb-2">Do you want HTML </label>
          <br />
          <select
            name="format"
            value={format === "html" ? "true" : "false"}
            onChange={(e) => {
              dispatch(setFormat(e.target.value));
            }}
            className=" "
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
