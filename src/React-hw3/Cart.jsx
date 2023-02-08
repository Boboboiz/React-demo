import React, { Component } from "react";

export default class Cart extends Component {
  totalPrice() {
    return this.props.cart.reduce((preValue, currentItem) => {
      return preValue + currentItem.product.price * currentItem.quantity;
    }, 0);
  }
  renderCart = () => {
    return this.props.cart.map((item) => {
      return (
        <tr key={item.product.id}>
          <td>1</td>
          <td>
            <img
              src={item.product.image}
              alt=""
              className="img-fluid"
              style={{ width: "125px" }}
            />
          </td>
          <td className="fw-semibold">{item.product.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.decreaseQuant(item.product.id);
              }}
              className="btn btn-info me-2"
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => {
                this.props.increasQuant(item.product.id);
              }}
              className="btn btn-info ms-2"
            >
              +
            </button>
          </td>
          <td>{item.product.price}</td>
          <td>{item.product.price * item.quantity}</td>
          <td>
            <button
              onClick={() => {
                this.props.deleteCart(item.product.id);
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
  render() {
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
                      <th>Hình ảnh</th>
                      <th>Tên</th>
                      <th>Số lượng</th>
                      <th>Giá $</th>
                      <th>Thành tiền $</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                </table>
                <h2>Tổng tiền:{this.totalPrice()} </h2>
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.props.paymentCart}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss= "modal"
                >
                  Thanh toán
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
