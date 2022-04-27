import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { appActions } from "../../store/app-reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import classes from "./MainHeader.module.css";
import constants from "../../helpers/constants";
import tko from "../../helpers/utilities";

const MainHeader = () => {
  const [regionFilter, setRegionFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.app.countries);

  const handleRegionFilterChange = (event) => {
    const region = event.target.value;
    setRegionFilter(region);

    filterCountries(searchValue, region);
  };

  const handleSearch = (event) => {
    const searchString = event.target.value;
    setSearchValue(searchString);

    filterCountries(searchString, regionFilter);
  };

  const filterCountries = (searchString, region) => {
    const filteredCountries = tko.filterBySearch(countries, searchString, region);
    // console.log(filteredCountries);
    dispatch(appActions.setFilteredCountries(filteredCountries));
  };

  return (
    <div className={classes["main-header"]}>
      <div className={classes["search-container"]}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          placeholder="Search for a country..."
          className={classes.search}
          onChange={handleSearch}
          value={searchValue}
        />
      </div>
      <select
        onChange={handleRegionFilterChange}
        className={classes.filter}
        defaultValue={regionFilter}
      >
        <option value="" disabled hidden>
          Filter by Region
        </option>
        <option value="all">All Regions</option>
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
