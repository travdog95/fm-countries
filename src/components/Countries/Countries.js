import Country from "../Country/Country";
import classes from "./Countries.module.css";

const Countries = (props) => {
  const { countries } = props;
  return (
    <div className={classes.countries}>
      {countries.map((country, index) => {
        return <Country key={index} country={country} />;
      })}
    </div>
  );
};

export default Countries;
