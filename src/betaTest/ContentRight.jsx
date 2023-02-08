import React, { Component } from 'react'
import StockChart from './StockChart'

export default class ContentRight extends Component {
  render() {
    return (
      <div>
        <div>
          <table className='table'>
            <thead>
              <tr className='text-warning'>
                <th>Ngân hàng </th>
                <th>Lãi suất</th>
              </tr>
            </thead>
            <tbody className='fw-semibold text-light'>
              <tr>
                <td>HDBank</td>
                <td>9.50%</td>
              </tr>
              <tr>
                <td>Techcombank</td>
                <td>8.70%</td>
              </tr> 
              <tr>
                <td>MBBank</td>
                <td>8.00%</td>
              </tr> 
              <tr>
                <td>Vietinbank</td>
                <td>7.40%</td>
              </tr> 
              <tr>
                <td>Vietcombank</td>
                <td>7.40%</td>
              </tr> 
              <tr>
                <td>Agribank</td>
                <td>7.40%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='text-warning fw-semibold fs-3 d-flex justify-content-around mt-5'>
          <span>Ngày</span>
          <span>Tháng</span>
          <span>Năm</span>
        </div>
        <div className='mt-3'>
          <StockChart />
        </div>
      </div>
    )
  }
}
