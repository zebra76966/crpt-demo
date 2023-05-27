import { React, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import coindata from "./mockdata.json";
import { Chart as ChartJS } from "chart.js/auto";
const Lchart = (props) => {
  const colors = ["orange", "purple", "skyblue"];
  const data = {
    labels: coindata.map((ini) => ini.year),
    datasets:
      props.cdata == -1
        ? [
            {
              label: coindata[0].currency,
              tension: 0.6,
              data: coindata[0].data.map((ini) => ini.price),

              borderColor: ["orange"],
              borderWidth: 2,
            },
            {
              label: coindata[1].currency,
              tension: 0.6,
              data: coindata[1].data.map((ini) => ini.price),

              borderColor: ["purple"],
              borderWidth: 2,
            },
            {
              label: coindata[2].currency,
              tension: 0.6,
              data: coindata[2].data.map((ini) => ini.price),

              borderColor: ["skyblue"],
              borderWidth: 2,
            },
          ]
        : [
            {
              label: coindata[props.cdata].currency,
              tension: 0.6,
              data: coindata[props.cdata].data.map((ini) => ini.price),

              borderColor: colors[props.cdata],
              borderWidth: 2,
            },
          ],
  };
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default Lchart;
