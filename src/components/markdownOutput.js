import React from "react";
import { useSelector } from "react-redux";
function MarkdownOutput() {
  const text = useSelector((state) => state.app.markdown);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      className="border  border-dark border-2  m-2 col-md-4 shadow-lg  output bg-light rounded  text-dark"
    ></div>
  );
}

export default MarkdownOutput;
