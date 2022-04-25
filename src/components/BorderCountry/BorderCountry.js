import classes from "./BorderCountry.module.css";
import tko from "../../helpers/utilities";

const BorderCountry = (props) => {
  const { countryCode, countries } = props;
  const country = tko.getCountryByCode(countryCode, countries);

  const handleClick = (country) => {
    console.log(country);
  };

  return (
    <div className={classes.country} onClick={() => handleClick(country)}>
      {country.name}
    </div>
  );
};

export default BorderCountry;
