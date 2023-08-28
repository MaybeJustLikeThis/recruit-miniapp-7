import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import applySlice from "./applySlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    applySlice: applySlice.reducer,
  },
});

export default store;
