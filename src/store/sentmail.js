import { createSlice } from "@reduxjs/toolkit"

const mail = JSON.parse(localStorage.getItem("sentmail"));
const initialsetmailState = {
    sentmail : mail || [],
}
const sentmailSlice = createSlice({
    name: "sentmail",
    initialState: initialsetmailState,
    reducers : {
        sentmailbox(state,action) {
           //let obj= action.payload;
              state.sentmail.push(action.payload)
              
            localStorage.setItem("sentmail",JSON.stringify(state.sentmail))
          }
        
    }
});

export const sentmailSliceActions = sentmailSlice.actions;
export default sentmailSlice.reducer;