import React, { Component } from "react";
// B1
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    const {demoRedux, dispatch} = this.props
    return <h1 className="text-center">{demoRedux.map(item => {
        return (<span key={item.id}>{item.id}</span>)
    })}
    <br /> 
    <button onClick={()=> dispatch({
        type: "CHANGE_NAME", // dùng để phân biệt loại dữ liệu đưa lên store
        payload: 2 // là dữ liệu để đưa lên store
    })}>Change</button>   
    </h1>;
  }
}
// B2
const mapStateToProps = (state) => {
  return {
    demoRedux: state.demoReducer.danhSach,
    cartReducer : state.cartReducer.cart
  };
};

// B3
export default connect(mapStateToProps, null)(DemoRedux);

/**
 * B1: import hàm connect từ thư viện react-redux
 * B2:  tạo hàm mapStateToProps => lấy dữ liệu từ store chung redux về component
 * B3: gọi hàm connect truyền vào 2 tham số ở hai hàm
 *  + hàm 1 : mapStateToProps,null
 *  + hàm 2 : tên của component
 * B4: đưa export defaut của component xuống hàm connect
 */
// arrow function ko có {} hàm tự return 
// clone arr [], object {}