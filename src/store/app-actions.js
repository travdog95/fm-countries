import { appActions } from "./app-reducer";
import constants from "../helpers/constants";

export const fetchCountries = () => {
  return async (dispatch) => {
    const response = await fetch(`${constants.API}all`);
    if (!response.ok) {
      throw new Error("Could not fetch countries!");
    }
    const countries = await response.json();

    dispatch(appActions.loadCountries(countries));
  };
};
