import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { HeadphoneSlice } from "./entities/headphone";
import { CodecSlice } from "./entities/codec";
import { ReviewSlice } from "./entities/review";
import { UserSlice } from "./entities/user";
import { CartSlice } from "./ui/cart";
import { apiService } from "./service/api";

export const store = configureStore({
  reducer: combineSlices(
    HeadphoneSlice,
    CodecSlice,
    ReviewSlice,
    UserSlice,
    CartSlice,
    apiService
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
