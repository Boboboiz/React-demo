import React, { Component } from 'react'

export default class ShowInfo extends Component {
  render() {
    const {image, name, price, description, quantity} = this.props.setSelectedProduct
    return (
      <div className='card p-4'>
        <div className='row'>
            <div className='col-5'>
                <img src={image} />
            </div>
            <div className='col-7'>
                <h2>Tên:{name}</h2>
                <h3 >Giá:{price}</h3>
                <h4>Mô tả:{description}</h4>
                <h4>Số lượng:{quantity}</h4>
            </div>
        </div>
      </div>
    )
  }
}
