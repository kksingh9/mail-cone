import { createSlice } from "@reduxjs/toolkit";

const initialComposeState = {
  compose: false,
};

const composeSlice = createSlice({
  name: "compose",
  initialState: initialComposeState,
  reducers: {
    showEditor(state, action) {
      state.compose = true;
    },
    hideEditor(state, action) {
      state.compose = false;
    },
  },
});

export const composeSliceActions = composeSlice.actions;

export default composeSlice.reducer;
