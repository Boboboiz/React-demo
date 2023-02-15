import React, { Component } from 'react'
import { connect } from 'react-redux'
 class TableDetail extends Component {
  render() {
    return (
      <div >
        <table className='table bg-dark text-light' style={{border:"solid 2 px #151924"}}>
          <thead>
            <tr style={{fontSize:'13px', color:'#f1950c'}} >
              <th>Chỉ số</th>
              <th>Điểm</th>
              <th>Thay đổi (điểm)</th>
              <th>Thay đổi (%)</th>
            </tr>
          </thead>
          <tbody>
           {this.props.dataCarousel.recordset?.map((item, index)=> {
            
              return (
                <tr key={index} className='fw-semibold'>
                  <td>{item.ticker}</td>
                  {item.percent_d<0 ? <td className='text-danger'> {item.diemso}</td> : <td style={{color:"lightgreen"}}> {item.diemso}</td>}
                   {item.percent_d<0 ? <td className='text-danger'> {item.percent_d}</td> : <td style={{color:"lightgreen"}}> {item.percent_d}</td>}
                   {item.percent_d<0 ? <td className='text-danger'> {item.percent_d}</td> : <td style={{color:"lightgreen"}}> {item.percent_d}</td>}
                </tr>
              )
           })}
          </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToProps = (state ) => {
  return {
    dataCarousel: state.demoReducer.dataCarousel
  }
}
export default connect(mapStateToProps)(TableDetail)