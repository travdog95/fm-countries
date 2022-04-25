import "./App.css";
import "./css/_variables.css";
import "./css/_utilities.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCountries } from "./store/app-actions";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import CountryDetail from "./components/CountryDetail/CountryDetail";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    console.log("fetch");

    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return (
      <section>
        <p>Loading Countries...</p>
      </section>
    );
  }

  return (
    <div className="app">
      <Header theme="Light" />
      <div className="app-container">
        <Main />
        {/* <CountryDetail /> */}
      </div>
    </div>
  );
};

export default App;
