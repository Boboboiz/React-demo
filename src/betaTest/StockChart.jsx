import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import axios from "axios";
class StockChart extends Component {
 
  fetchDataChart = async () => {
    try {
      const { data } = await axios.get(
        "https://mkw-socket.vndirect.com.vn/mkwsocket/leaderlarger",
        {
          params: {
            index: this.props.name || undefined,
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
    if (prevProps.name !== this.props.name ) {
      this.fetchDataChart();
    }
    if (prevProps.chartData !== this.props.chartData) {     
      this.setState({
        series: [
          {
            data: this.handleRenderChart(),// mảng 
          },
        ],
        options: {
            xaxis: {
              categories: this.renderSymbol(),// mảng
            }
        }
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
    topStock = this.props.chartData.data?.map((item) => item.point);
    sortTopStock = topStock?.sort((a, b) => b - a);
    top5Stocks = sortTopStock?.slice(0, 5);
    sortBotStock = topStock?.sort((a, b) => a - b);
    top5BotStock = sortBotStock?.slice(0, 5);
  
    let dataForRender = top5Stocks.concat(top5BotStock);
    this.props.chartData.data?.forEach(item => {
      if (dataForRender.includes(item.point)) {
        symbols.push(item.symbol)
      }
    })
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
    topStock = this.props.chartData.data?.map((item) => item.point);
    sortTopStock = topStock?.sort((a, b) => b - a);
    top5Stocks = sortTopStock?.slice(0, 5);
    sortBotStock = topStock?.sort((a, b) => a - b);
    top5BotStock = sortBotStock?.slice(0, 5);
    dataForRender = top5Stocks.concat(top5BotStock);
    console.log(dataForRender)
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
        style:{
          color:'#F2FC54',
          fontSize: 15,
          fontWeight: 'semibold',
        }
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
            return y.toFixed(2);
          },
          style:{
            colors:'#fff',
            fontWeight:'bold',
            fontSize: 12,
          },
        },
      },
      xaxis: {
        type: "string",
        categories:[],
        labels: {
          rotate: 0,
          style:{
            colors:'#fff',
            fontWeight:'bold',
            fontSize: 12,
          },
        },
      },
    },
  };

  render() {
    return (
      <div>
        <ReactApexChart
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
