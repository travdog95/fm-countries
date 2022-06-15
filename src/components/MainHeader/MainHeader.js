import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appActions } from "../../store/app-reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";

import classes from "./MainHeader.module.css";
import constants from "../../helpers/constants";
import tko from "../../helpers/utilities";

//This is a comment
const MainHeader = () => {
  const [regionFilter, setRegionFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.app.countries);
  const filteredCountries = useSelector((state) => state.app.filteredCountries);
  const theme = useSelector((state) => state.app.theme);

  const handleRegionFilterChange = (event) => {
    const region = event.value;
    setRegionFilter(region);

    filterCountries(searchValue, region);
  };

  const handleSearch = (event) => {
    const searchString = event.target.value;
    setSearchValue(searchString);

    filterCountries(searchString, regionFilter);
  };

  const filterCountries = (searchString, region) => {
    dispatch(appActions.setFilteredCountries(tko.filterBySearch(countries, searchString, region)));
  };

  return (
    <div className={classes["main-header"]}>
      <div className={classes["search-outer-container"]}>
        <div className={`${classes["search-container"]} ${classes[`${theme}`]}`}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            placeholder="Search for a country..."
            className={`${classes.search} ${classes[`${theme}`]}`}
            onChange={handleSearch}
            value={searchValue}
          />
        </div>
        <div className={`${classes.label} ${classes[`${theme}`]}`}>
          {filteredCountries.length} countries displayed
        </div>
      </div>
      <Select
        options={constants.REGIONS}
        onChange={handleRegionFilterChange}
        defaultValue={"all"}
        placeholder="Filter by Region"
        className={`${classes.select} ${classes[`${theme}`]}`}
      />
    </div>
  );
};

export default MainHeader;
