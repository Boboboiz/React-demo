import React, { Component } from 'react'

export default class ShowInfo extends Component {
  render() {
    console.log(this.props.selectedProduct);
    const {image, name, price, description, quantity} = this.props.selectedProduct
    return (
      <div className='card p-4'>
        <div className='row'style={{alignItems:"center"}}>
            <div className='col-5'>
                <img src={image} alt='' className='img-fluid'/>
            </div>
            <div className='col-7' >
                <h2 className='text-dark fw-bold'>Tên sản phẩm:{name}</h2>
                <h3 className='text-danger'>Giá:{price}$</h3>
                <h4 className='mt-3 '>Mô tả: {description}</h4>
                <h4 className='mt-3'>Số lượng: {quantity}</h4>
            </div>
        </div>
      </div>
    )
  }
}
