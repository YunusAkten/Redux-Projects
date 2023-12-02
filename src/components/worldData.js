import React from "react";
import { useSelector } from "react-redux";
function WorldData() {
  const data = useSelector((state) => state.app.data);
  return (
    <div className="my-2">
      <h2>World Data</h2>
      <div className="row justify-content-center gap-2">
        <div className=" bg-danger bg-opacity-50 rounded col-3 statCard text-center    border border-red  shadow">
          <h3>Total Cases: {data.world_total.total_cases}</h3>
          <h4 className="text-muted">
            Last Updated at : {data.world_total.statistic_taken_at}{" "}
          </h4>
        </div>
        <div className=" col-3 bg-success bg-opacity-50  rounded shadow    statCard    border border-success">
          <h3>Total Recovered: {data.world_total.total_recovered}</h3>
          <h4 className="text-muted">
            Last Updated at : {data.world_total.statistic_taken_at}{" "}
          </h4>
        </div>
        <div className="col-3 bg-warning bg-opacity-50  rounded shadow statCard    border border-warning">
          <h3>Total Deaths: {data.world_total.total_deaths}</h3>
          <h4 className="text-muted">
            Last Updated at : {data.world_total.statistic_taken_at}{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default WorldData;
