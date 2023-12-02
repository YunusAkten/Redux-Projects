import { useEffect } from "react";
import "./App.css";
import { fetchData, setCountry } from "./redux/appslice";
import { useDispatch, useSelector } from "react-redux";
import WorldData from "./components/worldData";
import Country from "./components/Country";
import Loading from "./components/Loading";
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.data);
  const dataLoading = useSelector((state) => state.app.dataLoading);
  const country = useSelector((state) => state.app.country);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className=" mt-4 row justify-content-center  text-center">
      <h1 className="float-start">COVID-19 Tracker</h1>

      {dataLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <WorldData />
          <h2 className=" mt-4 col-12">Select Country</h2>
          <select
            onChange={(e) => dispatch(setCountry(e.target.value))}
            className=" col-5   my-2"
            defaultValue={country}
          >
            {data.countries_stat.map((country, index) => (
              <option key={index} value={country.country_name}>
                {country.country_name}
              </option>
            ))}
          </select>
          <h4 className=" text-muted mt-4 mb-0 col-12">
            Current state in {country}{" "}
          </h4>
          <Country />
          <footer className="text-center mt-4">
            <p>
              Made by{" "}
              <a
                className="text-decoration-none"
                target="_blank"
                href="https://github.com/YunusAkten"
              >
                Yunus A.
              </a>
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
