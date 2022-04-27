import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  filteredCountries: [],
  selectedCountry: {},
  theme: "light",
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
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
