import "./App.css";
import Text from "./components/Text";
import Form from "./components/Form";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchParagraphText } from "./redux/appSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchParagraphText(4));
  }, [dispatch]);
  return (
    <div className="App container">
      <header>
        <h1>React sample text generator</h1>
      </header>
      <main>
        <Form />
        <Text></Text>
      </main>
      <footer className="mt-4 text-center">
        <p>
          Created by{" "}
          <a
            className="text-decoration-none text-dark font-weight-bold "
            target="_blank"
            href="https://github.com/YunusAkten
        "
          >
            Yunus A.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
