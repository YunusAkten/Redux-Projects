import { useEffect, useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWords } from "./redux/appSlice";
import Words from "./components/Words";
import TypingArea from "./components/TypingArea";
import Timer from "./components/Timer";
import Results from "./components/Results";
import NightMode from "./components/NightMode";
function App() {
  const dispatch = useDispatch();
  const currentWord = useSelector((state) => state.app.currentWord); // replace with your actual selector
  const wordRef = useRef(null);

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  useEffect(() => {
    if (wordRef.current) {
      wordRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentWord]);

  return (
    <div className="App container mt-2   justify-content-center ">
      <NightMode> </NightMode>

      <main>
        <Words wordRef={wordRef}></Words>
        <TypingArea></TypingArea>
        <Timer></Timer>
      </main>
      <Results></Results>
      <footer className="fixed-bottom text-center">
        <p className=" mt-5">
          Created by{" "}
          <a
            className="text-decoration-none"
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
