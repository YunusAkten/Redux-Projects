import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";
import * as DOMPurify from "dompurify";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    text: " ",
    markdown: " ",
  },
  reducers: {
    updateText: (state, action) => {
      //we use marked to parse the text
      state.text = action.payload;
      const parsedText = marked(action.payload);
      //for security reasons, we use DOMPurify to sanitize the text
      const sanitizedText = DOMPurify.sanitize(parsedText);
      state.markdown = sanitizedText;
    },
  },
});
export const { updateText } = appSlice.actions;
export default appSlice.reducer;
