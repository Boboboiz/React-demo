import React, { Component } from "react";
import { connect } from "react-redux";
import { chooseSeatAction } from "../redux/actions/bookingTicketAction";
import homestyle from "./HomeStyle.module.css";
import "./Seat.css";
class Seat extends Component {
  renderSeatNum = () => {
    return this.props.item.danhSachGhe.map((numOfSeat, index) => {

        // trạng thái ghế đã được đặt trước
      let cssChosenSeat = "";
      let disable = false;
      if (numOfSeat.daDat) {
        cssChosenSeat = "chosenSeat";
        disable = true;
      }
        // Tìm vị trí user click vào ghế cần đặt
        let cssChoosingSeat = ''
        let indexChoosingSeat = this.props.choosingSeat.findIndex(choosingSeat => 
            choosingSeat.soGhe === numOfSeat.soGhe
        )
        if(indexChoosingSeat !== -1) {
            cssChoosingSeat = 'choosingSeat'
        }
      return (
        <button onClick={()=> {{
            this.props.dispatch(chooseSeatAction(numOfSeat))
        }}}
          disabled={disable}
          className={`${cssChoosingSeat} ${cssChosenSeat}  ${homestyle.seat}  text-dark fw-bold fs-6`}
          key={index}
        >
          {numOfSeat.soGhe}
        </button>
      );
    });
  };
  renderSeatRow = () => {
    if (this.props.seatRow === 0) {
      return (
        this.renderRowNum()
      );
    } else {
      return (
        <div>
          {this.props.item.hang}
          {this.renderSeatNum()}
        </div>
      );
    }
  };
  renderRowNum = () => {
    return this.props.item.danhSachGhe.map((numOfSeat,index) => {
        return (
            <button key={index} className={`${homestyle.row}  fw-bold mt-1 ms-4`} style={{fontSize:"25px"}}>
                {numOfSeat.soGhe}
            </button>
        )
    })
    
  }
  render() {
    return (
      <div className="text-light text-start fw-bold mb-4 fs-5 mt-2 ">
        {this.renderSeatRow()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choosingSeat: state.seatReducer.choosingSeat,
  };
};
export default connect(mapStateToProps)(Seat);
