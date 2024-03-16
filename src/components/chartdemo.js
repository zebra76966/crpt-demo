import { React, useState, useEffect } from "react";
import { Line, Bar, Radar } from "react-chartjs-2";
import coindata from "./mockdata.json";
import { Chart as ChartJS } from "chart.js/auto";
const Lchart = (props) => {
  const colors = ["#e74c3c", "#fffc0b", "#f1c40f", "#2ecc71", "#3498db", "#9b59b6", "#e67e22", "#1abc9c", "#e91e63", "#00bcd4"];
  const data = {
    labels: coindata.map((ini) => ini.year),
    datasets:
      props.cdata.length == 0
        ? coindata.map((ini, i) => {
            return {
              label: ini.currency,
              tension: 0.6,
              data: ini.data.map((ini) => ini.price),
              borderColor: colors[i],
              backgroundColor: colors[i],
              borderWidth: 2,
            };
          })
        : props.cdata.map((ini, i) => {
            return {
              label: coindata[ini].currency,
              tension: 0.6,
              data: coindata[ini].data.map((ini) => ini.price),
              borderColor: colors[ini],
              backgroundColor: colors[ini],
              borderWidth: 2,
            };
          }),
  };

  const data2 = {
    labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: "rgba(66, 158, 245, 0.7)",
        borderColor: "rgba(255, 255, 255)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(255,255,255,0.5)",
        },
        grid: {
          color: "rgba(255,255,255,0.5",
        },
      },
    },
  };
  return (
    <>
      {props.cType == "line" && <Line data={data} />}
      {props.cType == "bar" && <Bar data={data} />}
      {props.cType == "radar" && (
        <div style={{ maxHeight: "800px" }}>
          <Radar data={data2} options={options} />
        </div>
      )}
    </>
  );
};

export default Lchart;
