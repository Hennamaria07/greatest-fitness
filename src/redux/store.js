import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./userAuthSlice.js";

const store = configureStore({
    reducer: userAuthSlice
});

export default store;