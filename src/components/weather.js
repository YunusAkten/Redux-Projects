import WeatherCard from "./weatherCard";
import { useSelector } from "react-redux";
import React from "react";
import TodaysWeatherCard from "./todaysWeatherCard";
function Weather() {
  const weeklyWeather = useSelector((state) => state.weather.weeklyWeather);
  const city = useSelector((state) => state.weather.selectedCity);
  return (
    <div className="row justify-content-center  container mt-4">
      <h1> {city} </h1>
      {weeklyWeather.map((day, index) => {
        if (index === 0) {
          return <TodaysWeatherCard day={day} key={index}></TodaysWeatherCard>;
        }
        return <WeatherCard day={day} index={index} key={index}></WeatherCard>;
      })}
    </div>
  );
}

export default Weather;
