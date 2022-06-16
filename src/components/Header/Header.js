import { useSelector, useDispatch } from "react-redux";

import { appActions } from "../../store/app-reducer";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);
  const changeThemeIcon = theme === "light" ? faMoon : faSun;
  const changeThemeLabel = theme === "light" ? "Dark" : "Light";

  const changeTheme = () => {
    dispatch(appActions.setTheme(changeThemeLabel.toLocaleLowerCase()));
  };

  return (
    <div className={`${classes["header-container"]} ${classes[`${theme}`]}`}>
      <div className={classes.header}>
        <div className={classes.title}>Where in the worlds?</div>
        <div className={classes["theme-container"]} onClick={changeTheme}>
          <FontAwesomeIcon icon={changeThemeIcon} />
          <span className={classes["theme-label"]}>{changeThemeLabel} Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
