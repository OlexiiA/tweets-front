import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import tweetsSlice from "./tweets/tweetsSlice";
import commentSlice from "./comment/commentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tweets: tweetsSlice,
    comment: commentSlice,
  },
});
