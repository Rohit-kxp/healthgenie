import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsPanel = () => {
  const data = {
    labels: ["Region 1", "Region 2", "Region 3", "Region 4"],
    datasets: [
      {
        label: "People with similar disease",
        data: [10, 25, 15, 30],
        backgroundColor: "#1d2671",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Nearby Similar Cases" },
    },
  };

  return (
    <div className="stats-panel-bottom">
      <div className="stats-chart">
        <Bar data={data} options={options} />
      </div>
      <div className="precaution-tab">
        <h3>Precautions</h3>
        <ul>
          <li>Wear a mask in public places.</li>
          <li>Wash your hands frequently.</li>
          <li>Maintain social distancing.</li>
          <li>Avoid large gatherings.</li>
          <li>Get vaccinated if eligible.</li>
        </ul>
      </div>
    </div>
  );
};

export default StatsPanel;
