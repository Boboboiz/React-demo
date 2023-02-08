import React, { Component } from "react";
import homestyle from "./HomeStyle.module.css";
import { connect } from "react-redux";
import { cancelSeatAction } from "../redux/actions/bookingTicketAction";

class ListSeat extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <button className={homestyle.chosenSeat}></button>
            <span className="text-light fs-5 fw-bold ms-2">Ghế đã đặt</span>
          </div>
          <div>
            <button className={homestyle.choosingSeat}></button>
            <span className="text-light fs-5 fw-bold ms-2">Ghế đang chọn</span>
          </div>
          <div>
            <button className={homestyle.emptySeat}></button>
            <span className="text-light fs-5 fw-bold ms-2">Ghế trống</span>
          </div>
          <div>
            <table className="table table-bordered">
              <thead>
                <tr className="text-light fw-bold fs-5">
                  <th> Số Ghế</th>
                  <th> Giá</th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody >
                {this.props.choosingSeat.map((item, index) => {
                  return (
                    <tr className="text-warning fs-5 fw-bold">
                      <td>{item.soGhe}</td>
                      <td>{item.gia.toLocaleString()}</td>
                      <td>
                        <button onClick={() => {
                          this.props.dispatch(cancelSeatAction(item))
                        }} className="btn btn-danger ">Hủy</button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="text-light fw-bold fs-5">Tổng tiền :</td>
                  <td className="text-warning fw-bold fs-5">{this.props.choosingSeat.reduce((total,choosingSeat ,index)=> {
                    return (
                      total += choosingSeat.gia
                    )
                  },0).toLocaleString()}</td>
                  <td>
                    <button onClick={()=> {
                      return alert ('đặt vé thành công')
                    }} className="btn btn-success">Đặt vé</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choosingSeat: state.seatReducer.choosingSeat,
  };
};
export default connect(mapStateToProps)(ListSeat);
