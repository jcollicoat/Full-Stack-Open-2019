import React from "react";
import CountryDetailed from "./CountryDetailed";

const ListCountry = ({ country, filtered, setFilterValue }) => {
  if (filtered.length === 1) {
    return <CountryDetailed country={country} />;
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
