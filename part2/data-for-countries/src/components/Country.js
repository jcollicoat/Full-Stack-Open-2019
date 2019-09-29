import React from "react";
import Language from "./Language";

const ListCountry = ({ country, filtered, setFilterValue }) => {
  const languages = country.languages;

  const languageList = () =>
    languages.map(language => (
      <Language key={language.name} language={language.name} />
    ));

  if (filtered.length === 1) {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>{languageList()}</ul>
        <img
          src={country.flag}
          width="150px"
          height="auto"
          alt={country.name + "'s flag"}
        />
      </div>
    );
  } else {
    return (
      <li>
        {country.name}{" "}
        <button onClick={() => setFilterValue(country.name.toLowerCase())}>
          Show
        </button>
      </li>
    );
  }
};

export default ListCountry;
