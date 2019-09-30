import React, { useState, useEffect } from "react";
import axios from "axios";
import Language from "./Language";

const CountryDetailed = ({ country }) => {
  const [temperature, setTemperature] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState([]);
  const [wind, setWind] = useState([]);

  const languages = country.languages;
  const languageList = () =>
    languages.map(language => (
      <Language key={language.name} language={language.name} />
    ));

  useEffect(() => {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          APPID: "442d823e8e3cd5b976b25177b341f800",
          q: country.capital,
          units: "metric"
        }
      })
      .then(response => {
        setTemperature(response.data.main.temp);
        setWeatherIcon(
          "http://openweathermap.org/img/wn/" +
            response.data.weather[0].icon +
            ".png"
        );
        setWind(response.data.wind.speed);
      });
  }, [country.capital]);

  const displayWeather = () => {
    if (temperature.length < 1) {
      return <p>No weather data available for this city.</p>;
    } else {
      return (
        <>
          <p>
            <strong>Temperature:</strong> {temperature} &#8451;
          </p>
          <img
            src={weatherIcon}
            alt="Current Weather Icon"
            width="auto"
            height="auto"
          />
          <p>
            <strong>Wind:</strong> {wind}km/h.
          </p>
        </>
      );
    }
  };

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
      <h3>Weather in {country.capital}</h3>
      {displayWeather()}
    </div>
  );
};

export default CountryDetailed;
