import React from "react";
import { marked } from "marked";
function Example() {
  const text =
    " Heading  \n ======= \n Sub-heading \n ----------- \n ### Another deeper heading \n Paragraphs are separated by a blank line.  \n Leave 2 spaces at the end of aline to do a line break \n Text attributes *italic*, **bold**, `monospace`,~~strikethrough~~ \n . Shopping list: \n * apples \n * oranges \n *  pears \n \n Numberedlist: \n 1. apples \n 2. oranges \n 3. \n pears The rain---not the reign---in Spain. \n \n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*";
  const markdown = marked(text);
  return (
    <>
      <div className="border m-2  border-dark border-2  col-md-4 shadow-lg  output bg-light rounded  text-dark">
        <p className="exampleText">
          Heading {<br></br>} ======= {<br></br>}Sub-heading{<br></br>}{" "}
          -----------{<br></br>} ### Another deeper heading Paragraphs are
          separated by a blank line.{<br></br>} Leave 2 spaces at the end of a
          line to do{<br></br>} a{<br></br>} line break{<br></br>} Text
          attributes *italic*, **bold**, `monospace`, ~~strikethrough~~ .
          {<br></br>} Shopping list:{<br></br>} * apples{<br></br>} * oranges
          {<br></br>} * pears {<br></br>}Numbered list:{<br></br>} 1. apples{" "}
          {<br></br>}2. oranges
          {<br></br>} 3. pears{<br></br>} The rain---not the reign---in Spain.{" "}
          {<br></br>}
          *[Herman Fassett]{<br></br>}(https://freecodecamp.com/hermanfassett)*
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: markdown,
        }}
        className="border py-4  m-2 border-dark border-2  col-md-4 shadow-lg  output bg-light rounded  text-dark"
      ></div>
    </>
  );
}

export default Example;
