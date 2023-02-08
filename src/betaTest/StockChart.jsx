import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
class StockChart extends Component {
  state = {
    series: [
      {
        name: "Point",
        data: [1, 2, 3, 4, 5, -6],
      },
    ],
    options: {
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
                color: "#F15B46",
              },
              {
                from: -45,
                to: 0,
                color: "#FEB019",
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
          text: "Nhóm cổ phiếu dẫn dắt thị trường",
          color:"yellow"
        },
        labels: {
          formatter: function (y) {
            return y.toFixed(0) ;
          },
        },
      },
      xaxis: {
        type: "string",
        categories: [],
        labels: {
          rotate: -90,
        },
      },
    },
  };
  render() {
    return (
      <div >
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
  };
};
export default connect(mapStateToProps)(StockChart);
