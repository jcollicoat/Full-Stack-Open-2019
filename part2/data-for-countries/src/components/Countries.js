import React from "react";
import ListCountry from "./ListCountry";
import SingleCountry from "./SingleCountry";

const Countries = ({ countries, filterValue }) => {
  const filtered = countries.filter(country =>
    country.name.toLowerCase().includes(filterValue)
  );

  const countriesList = () =>
    filtered.map(country => (
      <ListCountry key={country.numericCode} country={country} />
    ));

  const singleCountry = () =>
    filtered.map(country => (
      <SingleCountry key={country.numericCode} country={country} />
    ));

  if (filtered.length > 10) {
    return <p>Too many matches, please search more specifically.</p>;
  } else if (filtered.length === 1) {
    return singleCountry();
  } else {
    return <ul>{countriesList()}</ul>;
  }
};

export default Countries;
