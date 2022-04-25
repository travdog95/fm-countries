import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filteredCountries: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    filterCountries(state, action) {
      state.filteredCountries = action.payload;
    },
    loadCountries(state, action) {
      state.countries = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
