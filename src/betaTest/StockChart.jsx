import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import axios from "axios";
class StockChart extends Component {
 
  fetchDataChart = async () => {
    try {
      const { data } = await axios.get(
        "https://mkw-socket.vndirect.com.vn/mkwsocket/leaderlarger",
        {
          params: {
            index: this.props.name || "VNINDEX",
          },
        }
      );
      this.props.dispatch({
        type: "beta/UPDATE_DATA_CHART",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.fetchDataChart();
    }
    if (prevProps.chartData !== this.props.chartData) {
      this.setState({
        series: [
          {
            data: this.handleRenderChart(),
          },
        ],
        option: [
          {
            xaxis: {
              categories: this.renderSymbol()
            }
          }
        ]
      });
    }
  }
  renderSymbol = () => {
    let topStock = [];
    let sortTopStock = [];
    let top5Stocks = [];
    let sortBotStock = [];
    let top5BotStock = [];
    let symbols = [];
    if (!this.props.chartData || !this.props.chartData.data) return [];
    topStock = this.props.chartData.data?.map((item) => item.point.toFixed(2));
    sortTopStock = topStock?.sort((a, b) => b - a);
    top5Stocks = sortTopStock?.slice(0, 5);
    sortBotStock = topStock?.sort((a, b) => a - b);
    top5BotStock = sortBotStock?.slice(0, 5);
  
    let dataForRender = top5Stocks.concat(top5BotStock);
    this.props.chartData.data?.forEach(item => {
      if (dataForRender.includes(item.point.toFixed(2))) {
        symbols.push(item.symbol)
      }
    })
    console.log(symbols);
    return symbols;

  }
  handleRenderChart = () => {
    let topStock = [];
    let sortTopStock = [];
    let top5Stocks = [];
    let sortBotStock = [];
    let top5BotStock = [];
    let dataForRender = [];
    if (!this.props.chartData || !this.props.chartData.data) return [];
    topStock = this.props.chartData.data?.map((item) => item.point.toFixed(2));
    sortTopStock = topStock?.sort((a, b) => b - a);
    top5Stocks = sortTopStock?.slice(0, 5);
    sortBotStock = topStock?.sort((a, b) => a - b);
    top5BotStock = sortBotStock?.slice(0, 5);
    dataForRender = top5Stocks.concat(top5BotStock);

    return dataForRender;
  };

  state = {
    series: [
      {
        name: "Point",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      title: {
        display: true,
        text: "TOP cổ phiếu ảnh hưởng chỉ số",
        fontSize: 15,
      },
      plotOptions: {
        bar: {
          colors: {
            title: [{ color: "#000" }],
            ranges: [
              {
                from: 0,
                to: 100,
                color: "#11b957",
              },
              {
                from: -100,
                to: -46,
                color: "#000",
              },
              {
                from: -45,
                to: 0,
                color: "#d83810",
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
        labels: {
          formatter: function (y) {
            return y.toFixed(0);
          },
        },
      },
      xaxis: {
        type: "string",
        categories: [1,2,3,4,5,6,7,8,9,10],
        labels: {
          rotate: 0,
        },
      },
    },
  };

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={400}
          height={320}
        />
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.betaReducer.detail,
    name: state.betaReducer.name,
    chartData: state.betaReducer.chartData,
  };
};
export default connect(mapStateToProps)(StockChart);
