import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
