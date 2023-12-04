import { useSelector, useDispatch } from "react-redux";
import { setSelectedCity } from "../redux/weatherSlice";
function SelectCity() {
  const city = useSelector((state) => state.weather.selectedCity);
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weather.cities);
  const defaultCoord = useSelector((state) => state.weather.defaultCoord);
  function renderDropDown() {
    return cities.map((city) => {
      return (
        <option key={city.count} value={city.city}>
          {city.city}
        </option>
      );
    });
  }
  return (
    <select
      onChange={(e) => {
        dispatch(setSelectedCity(e.target.value));
      }}
      name="Cities"
      id="cities"
      style={{ color: "#ffebbf" }}
      className=" col-6  bg-dark rounded border-0 "
      value={city ? city : "Konumunuz"}
    >
      <option
        disabled={Object.keys(defaultCoord).length === 0 ? true : false}
        value="Konumunuz"
      >
        Konumunuz
      </option>
      {renderDropDown()}
    </select>
  );
}

export default SelectCity;
