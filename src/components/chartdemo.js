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
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
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
