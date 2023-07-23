import { createSlice } from "@reduxjs/toolkit";

const initialInboxmailState = {
    inboxmail : [],
}

const inboxmailSlice = createSlice({
    name: "inboxmail",
    initialState: initialInboxmailState,
    reducers : {
        addmail(state,action){
            state.inboxmail = action.payload;
        }
    }
});

export const inboxmailSliceActions = inboxmailSlice.actions;
export default inboxmailSlice.reducer;