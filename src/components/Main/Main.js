import MainHeader from "../MainHeader/MainHeader";
import Countries from "../Countries/Countries";

import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <MainHeader />
      <Countries />
    </div>
  );
};

export default Main;
