import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectCodecIds } from "../selectors";
import { selectHeadphoneCodecIds } from "../../headphone/selectors";

export const getCodecsByHeadphoneId = createAsyncThunk(
  "codec/getCodecsByHeadphoneId",
  async (headphoneId) => {
    const response = await fetch(
      `http://localhost:3001/api/codecs?productId=${headphoneId}`
    );

    return response.json();
  },
  {
    condition: (headphoneId, { getState }) => {
      const state = getState();
      const loadedCodecIds = selectCodecIds(state);
      const headphoneCodecIds = selectHeadphoneCodecIds(state, headphoneId);

      return headphoneCodecIds.some((id) => !loadedCodecIds.includes(id));
    },
  }
);
