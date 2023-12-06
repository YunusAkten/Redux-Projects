import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchWords = createAsyncThunk("words/fetchWords", async () => {
  const response = await fetch(
    `https://random-word-api.vercel.app/api?words=200`
  );
  const data = await response.json();
  return data;
});

export const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: "",
    testStarted: false,
    showResults: false,

    rightWordsArr: [],
    rightWords: 0,
    wrongWords: 0,
    rightKeyStrokes: 0,
    wrongKeyStrokes: 0,
    currentWord: "",
    currentWordIndex: 0,
    input: "",
    inputTrue: null,
    words: [],
  },
  reducers: {
    checkInput: (state, action) => {
      if (action.payload.trim().length > 0) {
        // if input true an space is pressed
        if (action.payload === state.currentWord + " ") {
          state.rightWords += 1;
          state.rightWordsArr.push(state.currentWord);
          state.currentWordIndex += 1;
          state.currentWord = state.words[state.currentWordIndex];
          state.input = "";
          state.inputTrue = null;

          return;
        }
        // space pressed but input is wrong
        else if (action.payload[action.payload.length - 1] === " ") {
          state.inputTrue = null;
          state.input = "";
          state.currentWordIndex += 1;
          state.currentWord = state.words[state.currentWordIndex];
          state.wrongWords += 1;
          return;
        }
        // check input
        else {
          // if input is true
          if (
            action.payload === state.currentWord.slice(0, action.payload.length)
          ) {
            state.rightKeyStrokes += 1;
            state.inputTrue = true;
          }
          // if input is wrong
          else {
            state.wrongKeyStrokes += 1;
            state.inputTrue = false;
          }
        }
      }
      // if input is empty
      else {
        state.inputTrue = null;
      }
      // set inputd
      state.input = action.payload;
    },
    setShowResults: (state, action) => {
      state.showResults = action.payload;
      state.input = "";
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    resetAll: (state) => {
      state.showResults = false;
      state.rightWordsArr = [];
      state.rightWords = 0;
      state.wrongWords = 0;
      state.rightKeyStrokes = 0;
      state.wrongKeyStrokes = 0;
      state.currentWord = state.words[0];
      state.currentWordIndex = 0;
      state.inputTrue = null;
    },
    setTestStarted: (state, action) => {
      state.testStarted = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWords.fulfilled, (state, action) => {
      state.words = action.payload;

      state.currentWord = action.payload[0];
    });
  },
});
export const {
  checkInput,
  setShowResults,
  setTheme,
  resetAll,
  setTestStarted,
} = appSlice.actions;
export default appSlice.reducer;
