import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import composeReducer from "./compose";
import inboxmailReducer from "./inboxmail";

const store = configureStore({
  reducer: {
    auth: authReducer,
    compose: composeReducer,
    inboxmail: inboxmailReducer,
  },
});

export default store;
