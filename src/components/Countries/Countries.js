import { useSelector } from "react-redux";

import Country from "../Country/Country";
import classes from "./Countries.module.css";

const Countries = () => {
  const countries = useSelector((state) => state.app.filteredCountries);

  return (
    <div className={classes.countries}>
      {countries.map((country, index) => {
        return <Country key={index} country={country} />;
      })}
    </div>
  );
};

export default Countries;
