import React from "react";
import Country from "./Country";

const Countries = ({ countries, filterValue, setFilterValue }) => {
  const filtered = countries.filter(country =>
    country.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const display = () =>
    filtered.map(country => (
      <Country
        key={country.numericCode}
        country={country}
        filtered={filtered}
        setFilterValue={setFilterValue}
      />
    ));

  if (filtered.length > 10) {
    return <p>Too many matches, please search more specifically.</p>;
  } else if (filtered.length === 1) {
    return display();
  } else if (filtered.length === 0) {
    return <p>No results, please try another search.</p>;
  } else {
    return <ul>{display()}</ul>;
  }
};

export default Countries;
