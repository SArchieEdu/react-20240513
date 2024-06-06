import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHeadphones = createAsyncThunk(
  "headphone/getHeadphones",
  async () => {
    const response = await fetch("http://localhost:3001/api/products");

    return response.json();
  }
);
