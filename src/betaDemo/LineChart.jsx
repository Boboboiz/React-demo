import React, { Component } from "react";
import { connect } from "react-redux";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
class LineChart extends Component {
  handleData = () => {
    let stockClosePrice = []
    stockClosePrice = this.props.chartData.recordset?.map(item => item.close_price)
    return stockClosePrice
  } 

  formatDateArray= () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDates = this.props.chartData.recordset?.map(item => {
      const date = new Date(item.date_time);
      const month = monthNames[date.getMonth()];
      const day = date.getDate();
      return `${day}-${month}`;
    });
    return formattedDates;
  }
  fetchDataLineChart = async () => {
    try {
      const {data} = await axios.get(
        "http://192.168.15.174:3000/chisointraday.dat",
        {
          params: {
            ticker: this.props.lineChartTicker || undefined,
          },
        }
      );
      this.props.dispatch({
        type: 'betaDemo/LINE_CHART_DATA',
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  state = {
    series: [
      {
        name: "",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
      },
    },
  };
  componentDidUpdate(prevProps) {
    if (prevProps.lineChartTicker !== this.props.lineChartTicker) {
      this.fetchDataLineChart();
    }
    if(prevProps.chartData !== this.props.chartData){
        this.setState({
            series:[
                {
                    data: this.handleData(),
                    name: this.props.lineChartTicker,
                }
            ],
            options:{
                xaxis:{
                    categories:this.formatDateArray() ,
                }
            }
               
        })
    }
  }
  render() {
    return (
      <div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    lineChartTicker: state.demoReducer.lineChartTicker,
    chartData: state.demoReducer.chartData
  };
};
export default connect(mapStateToProps)(LineChart);
