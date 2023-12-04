import React from "react";
import { useSelector } from "react-redux";
function TodaysWeatherCard({ day }) {
  const date = useSelector((state) => state.weather.date);
  const icon = day.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  return (
    <div className="rounded p-2 col-12 row justify-content-center   mt-2  bg-dark  shadow">
      <div className=" col-6 col-sm-3">
        <h1 className="">
          <strong>{Math.round(day.temp.day)}°</strong>/
          {Math.round(day.temp.night)}°
        </h1>
        <img
          className="   "
          alt={day.weather[0].description}
          src={iconUrl}
        ></img>
        <h3 className="  text-capitalize">{day.weather[0].description}</h3>
      </div>
      <div className="col-6 col-sm-3 mt-4   ">
        <h2>
          Hissedilen Sıcaklık:{" "}
          <strong>{Math.round(day.feels_like.day)}°</strong> /{" "}
          {Math.round(day.feels_like.night)}°
        </h2>
        <h3>Nem: {day.humidity}%</h3>
        {/* met/sec to km/h */}
        <h3>Rüzgar: {Math.round(day.wind_speed * 3.6) + " km/sa"}</h3>
      </div>{" "}
      <h4 className="col-12  ">{date}</h4>
    </div>
  );
}

export default TodaysWeatherCard;
