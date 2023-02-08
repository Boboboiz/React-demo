import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { image, name, price } = this.props.item;
    return (
      <div className="card mt-2">
        <img src={image} alt="" />
        <h4 className="fs-6">{name}</h4>
        <h5>{price}</h5>
        <div>
          <button
            onClick={() => {
              this.props.setSelectedProduct(this.props.item);
            }}
            className="btn btn-success me-2"
          >
            {" "}
            Chi tiết
          </button>
          <button onClick={()=> {
            this.props.addToCart(this.props.item)
          }} className="btn btn-info">Thêm</button>
        </div>
      </div>
    );
  }
}
