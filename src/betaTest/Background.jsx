import React, { Component } from "react";
import Header from "./Header";
import backgroundStyle from "./BackgroundStyle.module.css";
import { connect } from "react-redux";
import axios from "axios";
import Carousel from "./Carousel";
import ContentLeft from "./ContentLeft";
import ContentCenter from "./ContentCenter";
import ContentRight from "./ContentRight";
import Marquee from "react-fast-marquee";
class Background extends Component {
  fetchDataLineChart = async () => {
    try {
      const {data } = await axios.get(
        "http://192.168.15.174:3000/giacophieu.dat",
        {
          params: {
            ticker: undefined,
          }
        }
      )
    } catch (err) {

    }
  }
  fecthData = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://finfo-api.vndirect.com.vn/v4/change_prices?q=code:VNINDEX,HNX,UPCOM,VN30,VN30F1M~period:1D",
      });
      this.props.dispatch({
        type: "beta/UPDATE_STOCKS_LIST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className={`${backgroundStyle.backGround} row`}>
        <div className="banner-left col-1">Banner-left</div>
        <div className="col-10">
          <Header />
          <Marquee pauseOnHover="true" gradientColor="[0,0,0]" >
            <Carousel />
          </Marquee>
          <div
            className={`${backgroundStyle.contentBackground} row container-fluid`}
            style={{ marginLeft: "0.5px" }}
          >
            <div className="col-4">
              <ContentLeft />
            </div>
            <div className="col-4">
              <ContentCenter />
            </div>
            <div className="col-4">
              <ContentRight />
            </div>
          </div>
        </div>
        <div className="banner-right col-1">Banner-right</div>
      </div>
    );
  }
  componentDidMount() {
    // call api
    this.fecthData();
  }
}

export default connect()(Background);
