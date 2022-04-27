import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filteredCountries: [],
  selectedCountry: {},
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setFilteredCountries(state, action) {
      state.filteredCountries = action.payload;
    },
    loadCountries(state, action) {
      state.countries = action.payload;
    },
    setSelectedCountry(state, action) {
      state.selectedCountry = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
