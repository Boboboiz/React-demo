import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
class TableDetail extends Component {
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
  // handleRenderStockDetail = () => {
  //   return this.props.detail.data?.map((item, index) => {
  //     let sortTopStock = [];
  //     let top10Stocks = [];
  //     let stock = [];
  //     stock = item.point;
  //     sortTopStock = stock.sort((a, b) => b - a);
  //     top10Stocks = sortTopStock?.slice(0, 10);
  //     return (
  //       <tr key={index}>
  //         <td className="text-light fw-bold">{item.symbol}</td>
  //         {item.point < 0 ? (
  //           <td className="text-danger">{item.point.toFixed(2)}</td>
  //         ) : (
  //           <td className="text-warning">{item.point.toFixed(2)}</td>
  //         )}
  //         <td className="text-warning">{item.price.toFixed(2)}</td>
  //         <td className="text-warning">{item.vol}</td>
  //       </tr>
  //     );
  //   });
  // };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr style={{ color: "yellow" }}>
              <th>Mã CK</th>
              <th>Điểm</th>
              <th>Giá</th>
              <th>Giá trị (tỷ đồng)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.detail.data?.slice(0, 10).map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-light fw-bold">{item.symbol}</td>
                  {item.point < 0 ? (
                    <td className="text-danger">{item.point.toFixed(2)}</td>
                  ) : (
                    <td className="text-warning">{item.point.toFixed(2)}</td>
                  )}
                  <td className="text-warning">{item.price.toFixed(2)}</td>
                  <td className="text-warning">{item.vol}</td>
                </tr>
              );
            })}
          
          </tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    this.fetchStocksDetail();
  }
}
const mapStateToProps = (state) => {
  {
    return {
      type: state.betaReducer.type,
      detail: state.betaReducer.detail,
    };
  }
};
export default connect(mapStateToProps)(TableDetail);
