import "./App.css";
import "./css/_variables.css";
import "./css/_utilities.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import constants from "./helpers/constants";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(`${constants.API}all`);
      if (!response.ok) {
        throw new Error("Could not fetch countries!");
      }
      const data = await response.json();

      setCountries(data);

      setIsLoading(false);
    };

    fetchCountries();
  }, []);

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
        <Main countries={countries} />
      </div>
    </div>
  );
}

export default App;
