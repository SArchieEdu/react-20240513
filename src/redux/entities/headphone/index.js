import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getHeadphones } from "./thunks/get-headphones";

const entityAdapter = createEntityAdapter();

export const HeadphoneSlice = createSlice({
  name: "headphone",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getHeadphones.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});
