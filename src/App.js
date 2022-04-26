import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import "./css/_variables.css";
import "./css/_utilities.css";

import { fetchCountries } from "./store/app-actions";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CountryDetail from "./components/CountryDetail/CountryDetail";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const selectedCountry = useSelector((state) => state.app.selectedCountry);

  useEffect(() => {
    dispatch(fetchCountries());
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <p>Loading Countries...</p>
      </div>
    );
  }

  const PageContent =
    Object.keys(selectedCountry).length > 0 ? (
      <CountryDetail country={selectedCountry} />
    ) : (
      <Main />
    );

  return (
    <div className="app">
      <Header theme="Light" />
      <div className="app-container">{PageContent}</div>
    </div>
  );
};

export default App;
