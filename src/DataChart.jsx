import React from "react";
import Chart from "react-apexcharts";

export default function DataChart(props) {
  let data = props.data;

  let combinedData = {};
  data.slice(1).forEach((d) => {
    if (combinedData[d.trafficSource] !== undefined) {
      combinedData[d.trafficSource][0] =
        combinedData[d.trafficSource][0] + d.cost;
      combinedData[d.trafficSource][1] =
        combinedData[d.trafficSource][1] + d.impressions;
      combinedData[d.trafficSource][2] =
        combinedData[d.trafficSource][2] + d.clicks;
      combinedData[d.trafficSource][3] =
        combinedData[d.trafficSource][3] + d.conversions;
    } else {
      combinedData[d.trafficSource] = [];
      combinedData[d.trafficSource][0] = d.cost;
      combinedData[d.trafficSource][1] = d.impressions;
      combinedData[d.trafficSource][2] = d.clicks;
      combinedData[d.trafficSource][3] = d.conversions;
    }
  });

  let options = {
    chart: {
      id: "line",
    },
    title: {
      text: "Traffic Source Analysis",
      align: "center",
      margin: 10,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    xaxis: {
      categories: Object.keys(combinedData).map((key) => key),
      labels: {
        style: {
          colors: [],
          fontSize: "10px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    colors: ["#FF1654", "#9b5de5", "#00bbf9", "#ff8811"],
    series: [
      {
        name: "Impressions",
        data: Object.keys(combinedData).map((key) => combinedData[key][0]),
      },
      {
        name: "Cost",
        data: Object.keys(combinedData).map((key) => combinedData[key][1]),
      },
      {
        name: "Clicks",
        type: "column",
        data: Object.keys(combinedData).map((key) => combinedData[key][2]),
      },
      {
        name: "Conversions",
        type: "column",
        data: Object.keys(combinedData).map((key) => combinedData[key][3]),
      },
    ],
    yaxis: [
      {
        seriesName: "Impressions",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#FF1654",
        },
        labels: {
          style: {
            colors: "#FF1654",
          },
        },
        title: {
          text: "Impressions",
          style: {
            color: "#FF1654",
          },
        },
        labels: {
          formatter: (value) => {
            return value;
          },
          style: {
            colors: "#FF1654",
          },
        },
      },
      {
        seriesName: "Cost",
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#9b5de5",
        },
        labels: {
          style: {
            colors: "#9b5de5",
          },
        },
        title: {
          text: "Cost",
          style: {
            color: "#9b5de5",
          },
        },
        labels: {
          formatter: (value) => {
            return "$" + value;
          },
          style: {
            colors: "#9b5de5",
          },
        },
      },
      {
        seriesName: "Clicks",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#00bbf9",
        },
        labels: {
          style: {
            colors: "#00bbf9",
          },
        },
        title: {
          text: "Clicks",
          style: {
            color: "#00bbf9",
          },
        },
        labels: {
          formatter: (value) => {
            return value;
          },
          style: {
            colors: "#00bbf9",
          },
        },
      },
      {
        seriesName: "Conversions",
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#ff8811",
        },
        labels: {
          style: {
            colors: "#ff8811",
          },
        },
        title: {
          text: "Conversions",
          style: {
            color: "#ff8811",
          },
        },
        labels: {
          formatter: (value) => {
            return value + "%";
          },
          style: {
            colors: "#ff8811",
          },
        },
      },
    ],

    chart: {
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#000",
        opacity: 0.35,
      },
    },
  };

  return (
    <Chart
      id="data-chart"
      options={options}
      series={options.series}
      type="line"
      height="700"
      width="1440"
    />
  );
}
