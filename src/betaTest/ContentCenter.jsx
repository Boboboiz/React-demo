import React, { Component } from "react";
import { connect } from "react-redux";
import TableDetail from "./TableDetail";
import axios from "axios";
import StockChart from "./StockChart";

class ContentCenter extends Component {
  fetchStocksDetail = async () => {
    console.log(this.props.type);
    try {
      const { data } = await axios.get(
        "https://mkw-socket.vndirect.com.vn/mkwsocket/leaderlarger",
        {
          params: {
            index: this.props.type || undefined,
          },
        }
      );
      this.props.dispatch({
        type: "beta/UPDATE_STOCKS_DETAIL",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.fetchStocksDetail();
    }
  }
  render() {
    return (
      <div>
        <div>
          <div className="select-btn d-flex justify-content-center">
            {this.props.stocks.data?.map((item, index) => {
              if (item.type === "FU") return null;
              return (
                <button
                onClick={()=> {
                  this.props.dispatch({
                    type: "beta/UPDATE_STOCKS_CHART",
                    payload: item.name
                  })
                }}
                  key={index}
                  className="btn btn-link text-warning fw-semibold "
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <StockChart  />
        </div>

        <div>
          <h2 className="text-warning fw-semibold fs-5">Top 07 cổ phiếu</h2>
          <div className="select-btn d-flex justify-content-center">
            {this.props.stocks.data?.map((item, index) => {
              if (item.type === "FU") return null;
              return (
                <button
                  key={index}
                  onClick={() => {
                    this.props.dispatch({
                      type: "beta/UPDATE_TYPE_STOCKS",
                      payload: item.name,
                    });
                  }}
                  className="btn btn-link text-warning fw-semibold "
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <TableDetail />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stocks: state.betaReducer.stocks,
    type: state.betaReducer.type,
  };
};
export default connect(mapStateToProps)(ContentCenter);
