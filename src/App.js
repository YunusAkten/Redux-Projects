import "./App.css";
import UserInput from "./components/userInput";
import MarkdownOutput from "./components/markdownOutput";
import Example from "./components/Example";
import { useState } from "react";
function App() {
  const [showExample, setShowExample] = useState(false);
  return (
    <div className="h-100 justify-content-center container row  mx-auto  ">
      <h1 className=" mb-4 text-center">Markdown Previewer</h1>
      <button
        onClick={() => {
          setShowExample(!showExample);
        }}
        className="exampleBtn btn-dark btn  text-warning"
      >
        ?
      </button>
      {showExample ? (
        <Example></Example>
      ) : (
        <>
          <UserInput></UserInput>
          <MarkdownOutput></MarkdownOutput>
        </>
      )}

      <footer className="text-center mt-4">
        <p>
          Made by{" "}
          <a
            className="text-decoration-none"
            target="_blank"
            href="https://github.com/YunusAkten"
          >
            Yunus A.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
