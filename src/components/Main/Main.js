import MainHeader from "../MainHeader/MainHeader";
import Countries from "../Countries/Countries";

import classes from "./Main.module.css";

const Main = (props) => {
  const { countries } = props;
  return (
    <div className={classes.main}>
      <MainHeader />
      <Countries countries={countries} />
    </div>
  );
};

export default Main;
