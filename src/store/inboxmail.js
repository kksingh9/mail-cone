import { createSlice } from "@reduxjs/toolkit";

const initialInboxmailState = {
    inboxmail : [],
    emaildetail : "",
}

const inboxmailSlice = createSlice({
    name: "inboxmail",
    initialState: initialInboxmailState,
    reducers : {
        addmail(state,action){
        

        
                state.inboxmail= action.payload.sort(({ localtime: a }, {localtime: b }) => b > a ? 1 : b < a ? -1 : 0)
            
            
        },
        emailDetail(state,action){
            let obj = action.payload;
            let newobj = state.inboxmail.find((item) => item.id === obj.id)
            state.emaildetail = newobj ;
        }
    }
});

export const inboxmailSliceActions = inboxmailSlice.actions;
export default inboxmailSlice.reducer;