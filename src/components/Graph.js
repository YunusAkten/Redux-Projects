import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
    labels: {
      render: "value ",
    },
  },
};

const labels = ["Infected", "Recovered", "Deaths"];

export function Graph() {
  const countryData = useSelector((state) => state.app.countryData);
  const infected = countryData[0].cases.split(",").join("");
  const recovered = countryData[0].total_recovered.split(",").join("");
  const deaths = countryData[0].deaths.split(",").join("");
  return (
    <Bar
      options={options}
      data={{
        labels,

        datasets: [
          {
            label: "People",
            data: [infected, recovered, deaths],
            backgroundColor: ["#dc3545", "#198754", "#FFCE56"],
            borderColor: ["#dc3545", "#198754", "#FFCE56"],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
}
