import React, { Component } from "react";

export default class Loop extends Component {
  products = [
    { id: 1, name: "iphone", price: "100" },
    { id: 2, name: "samsung", price: "200" },
    { id: 3, name: "xiaomi", price: "300" },
  ];
  renderProduct() {
    // [{},{},{}] => [<tr>,<tr>,<tr>]
    const htmlArr = this.products.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    }); // hàm map nhận vào tham số item và return phần tử tương ứng

    // for (let item of this.products){
    //     let trTag = (
    //         <tr>
    //         <td>{item.id}</td>
    //         <td>{item.name}</td>
    //         <td>{item.price}</td>
    //          </tr>
    //     )
    //     htmlArr.push(trTag)
    // }

    return htmlArr;
  }
  render() {
    return (
      <div>
        <h1>Danh sách sản phẩm</h1>
        <table className="table ">
          <thead>
            <tr>
              <td>Id</td>
              <td>Tên sp</td>
              <td>Giá</td>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
      </div>
    );
  }
}
