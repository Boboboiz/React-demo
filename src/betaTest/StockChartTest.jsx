import { useEffect } from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
function StockChartTest() {
  const dataChart = useSelector((state) => state.betaReducer.chartData);
 
  const [data, setData] = useState([dataChart ? dataChart: null]);

  useEffect(() => {
    if (dataChart && dataChart.data) {
      const stockData = dataChart.data.map(item => item.point);
      const topStockSorted = stockData.sort((a, b) => b - a);
      const botStockSorted = stockData.sort((a, b) => a - b);
      const top5Stock = topStockSorted.slice(0, 5);
      const bot5Stock = botStockSorted.slice(0, 5);
      const stockDataRender = top5Stock.concat(bot5Stock);
      setData(data= stockDataRender);
    }
  }, [dataChart]);
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
      categories: [],
      labels: {
        rotate: -90,
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Point",
      data: [],
    },
  ]);

  return (
    <div>
    {/* {handleSortStock()} */}

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
