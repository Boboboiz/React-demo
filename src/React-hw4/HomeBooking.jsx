import React, { Component } from "react";
import background from "../assets/bgmovie.jpg";
import { connect } from "react-redux";
import homestyle from "./HomeStyle.module.css";
import ListSeat from "./ListSeat";
import Seat from "./Seat";
import dataSeat from "../data/danhSachGhe.json";
class HomeBooking extends Component {
  renderSeatRow = () => {
    return dataSeat.map((item, index) => {
      return (
        <div key={index} style={{transform:"translateX(10%)"}}>
          <Seat item={item} seatRow={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className={homestyle.homeBackground}
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "960px",
        }}
      >
        <div
          className="container-fluid"
          style={{ position: "relative", zIndex: "1" }}
        >
          <div className="row">
            <div className="col-8 text-center">
              <div className="text-warning fw-bold fs-3 ">
                ĐẶT VÉ XEM FILM DEMO
              </div>
              <div className="text-light mb-2 fw-bold fs-5">Màn Hình</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div className={homestyle.screen}></div>
              </div>
              <div>{this.renderSeatRow()}</div>
            </div>
            <div className="col-4 ">
              <div className="text-light fs-3 fw-bold">
                DANH SÁCH GHẾ BẠN CHỌN
              </div>
              <ListSeat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    seats: state.seatReducer.seats,
  };
};
export default connect(mapStateToProps)(HomeBooking);
