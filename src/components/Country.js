import React, { useEffect } from "react";
import { Graph } from "./Graph";
import { useSelector, useDispatch } from "react-redux";
import { setCountryData } from "../redux/appslice";
function Country() {
  const countryName = useSelector((state) => state.app.country);
  const data = useSelector((state) => state.app.data);
  const countryDataLoading = useSelector(
    (state) => state.app.countryDataLoading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.countries_stat) {
      data.countries_stat.filter((country) => {
        if (country.country_name === countryName) {
          dispatch(setCountryData([country]));
        }
      });
    }
  }, [dispatch, countryName, data.countries_stat]);

  return (
    <div className="container col-12 col-md-8 mb-4 ">
      {!countryDataLoading && <Graph />}
    </div>
  );
}

export default Country;
