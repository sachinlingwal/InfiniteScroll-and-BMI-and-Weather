import axios from "axios";
import React, { useRef, useState } from "react";
import Graph from "./Graph";
import classes from "./Weather.module.css";
const Weather = () => {
  //   const [search, setSearch] = useState("");
  const [currentCity, setCurrentCity] = useState();

  const inputRef = useRef();

  const handleSearch = () => {
    fetchWeather(inputRef.current.value);
  };

  const fetchWeather = async (search) => {
    const res = await axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=47c30ef54866bdae88e940488f5ee713&units=metric`
    );
    setCurrentCity(res.data);
  };
  console.log(currentCity);

  return (
    <div className={classes.container}>
      <h1>Weather App</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleSearch}>Search temprature</button>

      <h3>Current Temp - {currentCity?.main.temp}&#8451; </h3>
      <h3>Min Temp - {currentCity?.main.temp_max}&#8451; </h3>
      <h3>Max Temp - {currentCity?.main.temp_min}&#8451; </h3>
      <h3>Humidity - {currentCity?.main.humidity} </h3>
      <h3>Weather Type - {currentCity?.weather[0].main}</h3>
      <h3>Weather condition - {currentCity?.weather[0].description}</h3>

      <Graph
        min={Number(currentCity?.main.temp_min)}
        max={Number(currentCity?.main.temp_max)}
      />
    </div>
  );
};

export default Weather;
