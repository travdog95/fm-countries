import { useSelector, useDispatch } from "react-redux";

import { appActions } from "../../store/app-reducer";
import classes from "./BorderCountry.module.css";
import tko from "../../helpers/utilities";

const BorderCountry = (props) => {
  const { countryCode } = props;
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.app.countries);
  const theme = useSelector((state) => state.app.theme);
  const country = tko.getCountryByCode(countryCode, countries);

  const handleClick = (country) => {
    dispatch(appActions.setSelectedCountry(country));
  };

  return (
    <div
      className={`${classes.country} ${classes[`${theme}`]}`}
      onClick={() => handleClick(country)}
    >
      {country.name}
    </div>
  );
};

export default BorderCountry;
