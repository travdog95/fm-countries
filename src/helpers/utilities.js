// import constants from "./constants";

const utilities = {
  getCountryByCode(countryCode, countries) {
    return countries.find((country) => country.alpha3Code === countryCode);
  },
};

export default utilities;
