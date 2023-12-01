import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appslice";
export const store = configureStore({
  reducer: { app: appSlice.reducer },
});
