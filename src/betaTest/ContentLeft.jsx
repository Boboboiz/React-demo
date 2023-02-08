import React, { Component } from 'react'
import { connect } from 'react-redux'
 class ContentLeft extends Component {
  render() {
    return (
      <div>
        <div className='p-2'>
        <table className='table'>
          <thead>
            <tr className='text-warning'>
              <th>Chỉ số</th>
              <th>Điểm</th>
              <th>Thay đổi</th>
            </tr>
          </thead>
          <tbody>
            {this.props.stocks.data?.map((item, index)=> {
              return (
                <tr key={index}>
                  <td className='fw-bold fs-6 text-light'>{item.code}</td>
                 {item.change < 0?  <td className='text-danger'>{item.price.toFixed(2)} / {item.change.toFixed(2)}</td>: <td style={{color:"lightgreen"}}>{item.price.toFixed(2)} / {item.change.toFixed(2)}</td> }
                 {item.changePct <0 ? <td className='text-danger'>{item.changePct.toFixed(2)}%</td>:<td style={{color:"lightgreen"}}>{item.changePct.toFixed(2)}%</td>} 
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
          <div className='p-2'>
            <table className='table'>
              <thead>
                <tr style={{color:"yellow"}}>
                  <th>Hàng hóa</th>
                  <th>Giá</th>
                  <th>% thay đổi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-light fw-bold fs-6'>Vàng(USD/oz)</td>
                  <td style={{color:"lightgreen"}}>1928.36</td>
                  <td style={{color:"lightgreen"}}>0.27%</td>
                </tr>
                <tr>
                  <td className='text-light fw-bold fs-6'>Bạc(USD/tấn)</td>
                  <td style={{color:"lightgreen"}}>23.7305</td>
                  <td style={{color:"lightgreen"}}>0.55%</td>
                </tr> <tr>
                  <td className='text-light fw-bold fs-6'>Khí gas(USD/mmbtu)</td>
                  <td style={{color:"lightgreen"}}>2.684</td>
                  <td style={{color:"lightgreen"}}>0.26%</td>
                </tr> <tr>
                  <td className='text-light fw-bold fs-6'>Dầu brent(USD/thùng)</td>
                  <td style={{color:"red"}}>84.49</td>
                  <td style={{color:"red"}}>-0.48%</td>
                </tr> <tr>
                  <td className='text-light fw-bold fs-6'>Bông(Uscent/pound)</td>
                  <td style={{color:"lightgreen"}}>86.22</td>
                  <td style={{color:"lightgreen"}}>1.32%</td>
                </tr> <tr>
                  <td className='text-light fw-bold fs-6'>Cao su(USD/kg)</td>
                  <td style={{color:"lightgreen"}}>1.67</td>
                  <td style={{color:"lightgreen"}}>0.58%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='p-2'>
            <table className='table'>
              <thead>
                <tr style={{color:"yellow"}}>
                  <th>Tỷ giá</th>
                  <th>Giá trị</th>
                  <th> Thay đổi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-light fw-bold fs-6'>USD/VND</td>
                  <td style={{color:"lightgreen"}}>23.454</td>
                  <td style={{color:"lightgreen"}}>0.03%</td>
                </tr>
                <tr>
                  <td className='text-light fw-bold fs-6'>EUR/VND</td>
                  <td style={{color:"lightgreen"}}>25.510</td>
                  <td style={{color:"lightgreen"}}>0.13%</td>
                </tr> <tr>
                  <td className='text-light fw-bold fs-6'>JPY/VND</td>
                  <td style={{color:"yellow"}}>279.97</td>
                  <td style={{color:"yellow"}}>0.00%</td>
                </tr> <tr>
                  <td className='text-light fw-bold fs-6'>EUR/USD</td>
                  <td style={{color:"red"}}>2.09</td>
                  <td style={{color:"red"}}>-0.16%</td>
                </tr> <tr>
                  <td className='text-light fw-bold fs-6'>USD/JPY</td>
                  <td style={{color:"lightgreen"}}>130.39</td>
                  <td style={{color:"lightgreen"}}>0.39%</td>
                </tr> 
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.betaReducer.stocks,
  };
};export default connect(mapStateToProps)(ContentLeft)