import React from "react";
import { useSelector } from "react-redux";
function Words({ wordRef }) {
  const words = useSelector((state) => state.app.words);
  const currentWordIndex = useSelector((state) => state.app.currentWordIndex);
  const inputTrue = useSelector((state) => state.app.inputTrue);
  const rightWordsArr = useSelector((state) => state.app.rightWordsArr);
  const renderWords = () => {
    return words.map((word, index) => {
      if (index === currentWordIndex) {
        return (
          <span
            key={index}
            ref={wordRef}
            className={`rounded current-word ${
              inputTrue !== null ? inputTrue : null
            }
            
            `}
          >
            {word}{" "}
          </span>
        );
      } else if (index < currentWordIndex) {
        return (
          <span
            key={index}
            className={rightWordsArr.includes(word) ? "rightWord" : "wrongWord"}
          >
            {word}{" "}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };
  return <div className="words">{words && renderWords()}</div>;
}

export default Words;
