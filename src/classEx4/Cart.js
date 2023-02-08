import React, { Component } from "react";

export default class Cart extends Component {
  renderCart = () => {
    console.log(this.props.cart);
    return this.props.cart.map((item) => {
      return (
        <tr key={item.product.id}>
          <td>1</td>
          <td>{item.product.name}</td>
          <td>
            <img style={{ width: "80px" }} src={item.product.image} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.decreaseQuant(item.product.id);
              }}
              className="btn btn-info me-1 fs-5"
            >
              -
            </button>
            <span className=" fs-7 p-2 bg-dark text-light me-1">
              {item.quantity}
            </span>
            <button
              onClick={() => {
                this.props.increaseQuant(item.product.id);
              }}
              className="btn btn-info fs-5"
            >
              +
            </button>
          </td>
          <td>{item.product.price}</td>
          <td>{item.quantity * item.product.price}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteItem(item.product.id);
              }}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  totalPrice() {
    return this.props.cart.reduce((preValue, currentItem) => {
      return (
        preValue + currentItem.product.price * currentItem.quantity
      );
    }, 0);
  };
  // totalPrice2(){
  //   let total =0;
  //   // if( this.props.cart === null) return
  //   for (let item of this.props.cart) {
  //    if (item.quantity) {
  //     this.props.cart.item.price
  //    }
  //   }
  // }
  render() {
    console.log(this.props.addToCart);
    return (
      <div>
        <div
          className="modal fade"
          id="cartModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Giỏ hàng
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th> Tên</th>
                      <th>Hình ảnh</th>
                      <th> Số lượng</th>
                      <th> Đơn giá</th>
                      <th> Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                </table>
                <h2>Tổng tiền:{this.totalPrice()}$ </h2>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
                <button type="button" className="btn btn-primary">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
