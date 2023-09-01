import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import applySlice from "./applySlice";
import ticketSlice from "./ticketSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    applySlice: applySlice.reducer,
    ticketSlice: ticketSlice.reducer,
  },
});

export default store;
