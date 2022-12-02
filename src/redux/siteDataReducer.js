import { createSlice } from "@reduxjs/toolkit";
import languages from "./localization.js";

const siteProducts = createSlice({
  name: "products",
  initialState: {
    localization: languages,
    lang: "ru",
    
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    
  },
});

export const { changeLang } = siteProducts.actions;

export default siteProducts.reducer;