import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Step 1: Create an async thunk
export const fetchParagraphText = createAsyncThunk(
  "app/fetchParagraphText",
  async (paragraphNumber) => {
    const response = await fetch(
      `https://baconipsum.com/api/?type=all-meat&paras=${paragraphNumber}&start-with-lorem=1`
    );
    const data = await response.json();
    return data;
  }
);
const initialState = {
  format: "text",
  paragraphText: "",
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setFormat(state, action) {
      state.format = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchParagraphText.fulfilled, (state, action) => {
      state.paragraphText = action.payload;
    });
    builder.addCase(fetchParagraphText.rejected, (state, action) => {
      state.paragraphText = "Error when fetching data";
    });
    builder.addCase(fetchParagraphText.pending, (state, action) => {
      state.paragraphText = "";
    });
  },
});
export const { setFormat, setParagraphText } = appSlice.actions;
export default appSlice.reducer;
