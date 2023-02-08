import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='row mt-2  align-items-center'>
        <div className='col-10 d-flex align-items-center'  >
            <img src='./images/betaImage/beta.gif' style={{width:'100px' , height:' 50px'}} alt="icon" />
            <div className='fw-bold ms-5' style={{fontSize:"13px", lineHeight:"90px"}} >
            <a href='http://www.bsi.com.vn/vn' className='me-4 text-light text-decoration-none'>TRANG CHỦ</a>
            <span className='me-4'>
                <a href='http://www.bsi.com.vn/vn' className='me-2 text-light text-decoration-none'>MẪU THỬ SẢN PHẨM</a>
                <select style={{backgroundColor:"#0f5589"}}>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </span>
            <span className='me-4'>
                <a  href='http://www.bsi.com.vn/vn'  className='me-2 text-light text-decoration-none'>BÁO CÁO PHÂN TÍCH</a>
                <select style={{backgroundColor:"#0f5589"}}
                
                >
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
            </span>
            <a  href='http://www.bsi.com.vn/vn' className='me-4 text-light text-decoration-none' >TIMELINE DỰ ÁN</a>
            <a  href='http://www.bsi.com.vn/vn' className=' me-4 text-light text-decoration-none' >THỐNG KÊ NHANH</a>
            <a  href='http://www.bsi.com.vn/vn' className='text-light text-decoration-none' >KỸ THUẬT</a>
            </div>
        </div>
        <div className='btn-login col-2'>
            <button className='btn btn-info text-light fw-bold' style={{fontSize:"10px"}}>Đăng nhập</button>
        </div>
      </div>
    )
  }
}
