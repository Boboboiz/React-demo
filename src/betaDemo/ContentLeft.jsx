import React, { Component } from "react";
import contentLeftStyle from "./ContentLeft.module.css";
import LineChart from "./LineChart";
import TableDetail from "./TableDetail";
import { connect } from "react-redux";
import ColChartLeft from "./ColChartLeft";
import ColChartRight from "./ColChartRight";
class ContentLeft extends Component {
  render() {
    return (
      <div>
        <div className={`${contentLeftStyle.layoutGrid}`}>
          <div>
            {/* Bảng chỉ số */}
            <TableDetail />
          </div>
          <div>
            {/* Line chart */}
            <div>
              <select
                onChange={(event) => {
                  this.props.dispatch({
                    type: "betaDemo/LINE_CHART_TICKER",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="VNINDEX">VNINDEX</option>
                <option value="HNXINDEX">HNXINDEX</option>
              </select>
            </div>
            <LineChart />
          </div>
          <div>
            {/* Colunm chart */}
            <select
                onChange={(event) => {
                  this.props.dispatch({
                    type: "betaDemo/COL_CHART_TICKER",
                    payload: event.target.value,
                  });
                }}
              >
                <option value="VNINDEX">VNINDEX</option>
                <option value="HNXINDEX">HNXINDEX</option>
              </select>
            <ColChartLeft />
          </div>
          <div>
          {/* Colunm chart */}
          <ColChartRight />
          </div>
          <div>{/* Tỉ giá */}5</div>
          <div>{/* Tỉ giá */}6</div>
        </div>
      </div>
    );
  }
}
export default connect()(ContentLeft);
