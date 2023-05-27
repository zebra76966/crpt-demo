import { React, useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import coindata from "./mockdata.json";
import { Chart as ChartJS } from "chart.js/auto";
const Lchart = (props) => {
  const colors = [
    "#e74c3c",
    "#fffc0b",
    "#f1c40f",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#e67e22",
    "#1abc9c",
    "#e91e63",
    "#00bcd4",
  ];
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
  return (
    <>
      {props.cType == "line" && <Line data={data} />}
      {props.cType == "bar" && <Bar data={data} />}
    </>
  );
};

export default Lchart;
