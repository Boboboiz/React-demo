import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function StockChartTest() {
  const [data, setData] = useState([
    {
      point: 0.0022357458184297414,
      symbol: "FIR",
      vol: 21640.0,
      price: 48400.0,
    },
    {
      point: -0.02640490523986851,
      symbol: "VIB",
      vol: 110390.0,
      price: 23000.0,
    },
    {
      point: 0.02384859453787675,
      symbol: "FIT",
      vol: 215160.0,
      price: 4350.0,
    },
    {
      point: 0.0005115938575155606,
      symbol: "VID",
      vol: 470.0,
      price: 6040.0,
    },
    {
      point: -1.2423045948708202,
      symbol: "VIC",
      vol: 62980.0,
      price: 53700.0,
    },
    {
      point: -0.0019167824454376541,
      symbol: "SCD",
      vol: 50.0,
      price: 14450.0,
    },
    {
      point: 0.00032869322126731775,
      symbol: "TEG",
      vol: 9310.0,
      price: 8580.0,
    },
    {
      point: -0.0020587278075513307,
      symbol: "VIP",
      vol: 8970.0,
      price: 9830.0,
    },
    {
      point: -0.015524191731989113,
      symbol: "RAL",
      vol: 2060.0,
      price: 93000.0,
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: "#2CB95B",
            },
            {
              from: -45,
              to: 0,
              color: "#D73914",
            },
          ],
        },
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      title: {
        text: "Growth",
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(2);
        },
      },
    },
    xaxis: {
      type: "point",
      categories: data.slice(0, 50).map((item) => item.symbol),
      labels: {
        rotate: -90,
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Cash Flow",
      data: data.slice(0, 50).map((item) => item.point.toFixed(4)),
    },
  ]);

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        width={400}
      />
    </div>
  );
}

export default StockChartTest;
