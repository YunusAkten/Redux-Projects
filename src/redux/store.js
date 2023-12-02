import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./appslice";
export default configureStore({
  reducer: { app: appSlice.reducer },
});
