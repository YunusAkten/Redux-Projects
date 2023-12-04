import { useEffect } from "react";
import "./App.css";
import SelectCity from "./components/selectCity";
import Weather from "./components/weather";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCities,
  fetchWeather,
  fetchWeatherByCoord,
  setCoord,
  setSelectedCity,
  setDefaultCoord,
} from "./redux/weatherSlice";
function App() {
  const city = useSelector((state) => state.weather.selectedCity);
  const defaultCoord = useSelector((state) => state.weather.defaultCoord);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCities());
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        dispatch(setCoord(coords));
        dispatch(setSelectedCity("Konumunuz"));
        dispatch(setDefaultCoord(coords));
        dispatch(fetchWeatherByCoord(coords));
      });
    }
  }, [dispatch]);
  useEffect(() => {
    if (city) {
      if (city === "Konumunuz") {
        dispatch(fetchWeatherByCoord(defaultCoord));
      }
      dispatch(fetchWeather(city));
    }
  }, [city, dispatch, defaultCoord]);

  return (
    <div>
      <header className="pt-2 row  mx-2  ">
        <div className="col-6">
          <h1 className="display px-2  ">
            Weather app{" "}
            <i className=" mt-2 text-center fa-solid bolt-icon fa-bolt"></i>
          </h1>{" "}
        </div>

        <SelectCity />
      </header>
      <section className="App container   ">
        <Weather></Weather>
      </section>
      <footer className="mt-0 pt-0">
        <h6 className="text-center">
          <a
            className="text-decoration-none text-white"
            href="https://github.com/YunusAkten"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i> Github
          </a>{" "}
        </h6>
      </footer>
    </div>
  );
}

export default App;
