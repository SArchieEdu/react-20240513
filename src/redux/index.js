import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { HeadphoneSlice } from "./entities/headphone";
import { CodecSlice } from "./entities/codec";
import { ReviewSlice } from "./entities/review";
import { UserSlice } from "./entities/user";

export const store = configureStore({
  reducer: combineSlices(HeadphoneSlice, CodecSlice, ReviewSlice, UserSlice),
});

console.log(store.getState());
