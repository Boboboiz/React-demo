import React, { Component } from "react";
import Carousel from "./Carousel";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
 class BetaIndex extends Component {
  fetchData = async () => {
    try {
      const  res = await axios({
        url:"http://192.168.15.174:3000/chisoquocte.dat",
        method:"GET"
      })
      this.props.dispatch({
        type:"betaDemo/DATA_CAROUSEL",
        payload: res.data
      })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <div>
        <header className="bg-dark">
          <Header />
        </header>
        <div className="row container-fluid p-1">
          <div className="col-2 bg-success">Thanh điều hướng</div>
          <div className="col-10">
            <div className="row">
              <Carousel />
              <div className="col-7">
                <ContentLeft />
              </div>
              <div className="col-5">
                <ContentRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount (){
    this.fetchData()
  } 
}

export default connect()(BetaIndex)