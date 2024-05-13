import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/count";
import userReducer from "./reducers/user";

export const store = configureStore({
  reducer: {
    countReducer,
    userReducer,
  },
});
