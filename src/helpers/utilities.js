// import constants from "./constants";

const utilities = {
  getCountryByCode(countryCode, countries) {
    return countries.find((country) => country.alpha3Code === countryCode);
  },
  filterBySearch(countries, searchString, region) {
    let filteredCountries = [];
    countries.forEach((country) => {
      if (
        (searchString === "" || country.name.toLowerCase().includes(searchString.toLowerCase())) &&
        (region === "all" || region === country.region)
      ) {
        filteredCountries.push(country);
      }
    });

    return filteredCountries;
  },
};

export default utilities;
