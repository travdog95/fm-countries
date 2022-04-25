import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import classes from "./CountryDetail.module.css";
import BorderCountry from "../BorderCountry/BorderCountry";

const CountryDetail = (props) => {
  const { country, countries } = props;

  const currencyCodesArray = country.currencies.map((currency) => currency.code);
  const currencyCodes = currencyCodesArray.join(", ");

  const languageNamesArray = country.languages.map((language) => language.name);
  const languageNames = languageNamesArray.join(", ");

  const handleBackButtonClick = () => {
    console.log("go back");
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <button className={classes.button} onClick={handleBackButtonClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </button>
      </div>
      <div className={classes.country}>
        <div className={classes["flag-container"]}>
          <img src={country.flags.png} alt={country.name} className={classes.flag} />
        </div>
        <div className={classes["meta-data"]}>
          <div className={classes.name}>{country.name}</div>
          <div className={classes["meta-data-columns"]}>
            <div className={classes["meta-data-column"]}>
              <div>
                <span className={classes.label}>Native Name: </span>
                {country.nativeName}
              </div>
              <div>
                <span className={classes.label}>Population: </span>
                {country.population.toLocaleString("en-US")}
              </div>
              <div>
                <span className={classes.label}>Region: </span>
                {country.region}
              </div>
              <div>
                <span className={classes.label}>Sub Region: </span>
                {country.subregion}
              </div>
              <div>
                <span className={classes.label}>Capital: </span>
                {country.capital}
              </div>
            </div>
            <div className={classes["meta-data-column"]}>
              <div>
                <span className={classes.label}>Top Level Domain: </span>
                {country.topLevelDomain}
              </div>
              <div>
                <span className={classes.label}>Currencies: </span>
                {currencyCodes}
              </div>
              <div>
                <span className={classes.label}>Languages: </span>
                {languageNames}
              </div>
            </div>
          </div>
          <div className={classes["meta-data-footer"]}>
            <div className={classes.label}>Border Countries: </div>
            {country.borders.map((countryCode) => {
              return (
                <BorderCountry countryCode={countryCode} key={countryCode} countries={countries} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
