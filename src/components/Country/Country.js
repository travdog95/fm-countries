import classes from "./Country.module.css";

const Country = (props) => {
  const { country } = props;
  return (
    <div className={classes.country}>
      <div className={classes["flag-container"]}>
        <img src={country.flags.svg} alt={country.name} className={classes.flag} />
      </div>
      <div className={classes["meta-data"]}>
        <div className={classes.name}>{country.name}</div>
        <div>
          <span className={classes.label}>Population: </span>
          {country.population}
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
