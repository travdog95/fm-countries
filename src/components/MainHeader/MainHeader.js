import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import classes from "./MainHeader.module.css";
import constants from "../../helpers/constants";

const MainHeader = (props) => {
  const handleSearch = () => {
    console.log("search");
  };

  return (
    <div className={classes["main-header"]}>
      <div className={classes["search-container"]}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder="Search for a country..." className={classes.search} />
      </div>
      <select onChange={handleSearch} className={classes.filter}>
        {constants.REGIONS.map((region) => {
          return (
            <option key={region} value={region}>
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MainHeader;
