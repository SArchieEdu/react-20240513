import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getCodecsByHeadphoneId } from "./thunks/get-codecs-by-headphone-id";

const entityAdapter = createEntityAdapter();

export const CodecSlice = createSlice({
  name: "codec",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getCodecsByHeadphoneId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});
