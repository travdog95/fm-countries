import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Header = (props) => {
  const { theme } = props;
  const changeThemeIcon = theme === "Light" ? faMoon : faSun;
  const changeThemeLabel = theme === "Light" ? "Dark" : "Light";

  const changeTheme = () => {
    console.log(changeThemeLabel);
  };

  return (
    <div className={classes["header-container"]}>
      <div className={classes.header}>
        <div className={classes.title}>Where in the world?</div>
        <div className={classes["theme-container"]} onClick={changeTheme}>
          <FontAwesomeIcon icon={changeThemeIcon} />
          <span className={classes["theme-label"]}>{changeThemeLabel} Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
