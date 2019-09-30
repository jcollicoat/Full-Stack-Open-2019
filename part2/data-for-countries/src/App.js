import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      <h4>Filter</h4>
      <Filter value={filterValue} onChange={handleFilterChange} />
      <Countries
        countries={countries}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
    </div>
  );
};

export default App;
