import React from "react";
import { useSelector } from "react-redux";
function WeatherCard({ day, index }) {
  const date = useSelector((state) => state.weather.date);
  const icon = day.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  // add 0 if day is less than 10
  const dayFix =
    Number(date.split(".")[0]) + index < 10
      ? "0" + (Number(date.split(".")[0]) + index)
      : Number(date.split(".")[0]) + index;
  const dateForCard = dayFix + "." + date.split(".")[1];
  return (
    <div className="rounded col-12 justify  col-sm-6   row col-md-3  mx-1 weatherCard mt-2  bg-dark  ">
      <h3 className="col-12">
        <strong>{Math.round(day.temp.day)}°</strong>/{" "}
        {Math.round(day.temp.night)}°
      </h3>
      <div className="col-6">
        <img
          className="   "
          alt={day.weather[0].description}
          src={iconUrl}
        ></img>{" "}
      </div>

      <h4 className="col-12  ">{dateForCard}</h4>
    </div>
  );
}

export default WeatherCard;
