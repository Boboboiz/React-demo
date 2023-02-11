import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
function StockChart2() {
    const dataChart = useSelector(state => state.betaReducer.chartData)
  const [data, setData] = useState(dataChart);
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
          return y.toFixed(0) + "%";
        },
      },
    },
    xaxis: {
      type: "point",
      categories: data?.slice(0, 50).map((item) => item.symbol),
      labels: {
        rotate: -90,
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Cash Flow",
      data: data?.slice(0, 50).map((item) => item.point.toFixed(4)),
    },
  ]);

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default StockChart2;