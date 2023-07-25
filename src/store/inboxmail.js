import { createSlice } from "@reduxjs/toolkit";

const initialInboxmailState = {
  inboxmail: [],
  emaildetail: null,
  totalmail: 0,
};

const inboxmailSlice = createSlice({
  name: "inboxmail",
  initialState: initialInboxmailState,
  reducers: {
    addmail(state, action) {
      state.inboxmail = action.payload.sort(
        ({ localtime: a }, { localtime: b }) => { return (b > a ? 1 : b < a ? -1 : 0) ;
        });
      let sum = state.inboxmail.reduce((curr, prev) => {
        return curr + parseInt(prev.quantity);
      }, 0);
      state.totalmail = sum;
    },
    emailDetail(state, action) {
      let obj = action.payload;
      let newobj = state.inboxmail.find((item) => item.id === obj.id);
      if (newobj) {
        newobj.read = true;
      }
      state.emaildetail = newobj;
      if (newobj.quantity === 1) {
        newobj.quantity--;
      }
    },
  },
});

export const inboxmailSliceActions = inboxmailSlice.actions;
export default inboxmailSlice.reducer;
