import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import composeReducer from "./compose";
import inboxmailReducer from "./inboxmail";
import sentmailReducer from "./sentmail";

const store = configureStore({
  reducer: {
    auth: authReducer,
    compose: composeReducer,
    inboxmail: inboxmailReducer,
    sentmail: sentmailReducer,
  },
});

export default store;
