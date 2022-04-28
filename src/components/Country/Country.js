import { useDispatch, useSelector } from "react-redux";

import { appActions } from "../../store/app-reducer";
import classes from "./Country.module.css";

const Country = (props) => {
  const { country } = props;
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);

  const handleClick = (countryObject) => {
    dispatch(appActions.setSelectedCountry(countryObject));
  };

  return (
    <div
      className={`${classes.country} ${classes[`${theme}`]}`}
      onClick={() => handleClick(country)}
    >
      <div className={classes["flag-container"]}>
        <img src={country.flags.png} alt={country.name} className={classes.flag} />
      </div>
      <div className={`${classes["meta-data"]} ${classes[`${theme}`]}`}>
        <div className={classes.name}>{country.name}</div>
        <div>
          <span className={classes.label}>Population: </span>
          {country.population.toLocaleString("en-US")}
        </div>
        <div>
          <span className={classes.label}>Region: </span>
          {country.region}
        </div>
        <div>
          <span className={classes.label}>Capital: </span>
          {country.capital}
        </div>
      </div>
    </div>
  );
};

export default Country;
