import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.product.map((item) => {
      return (
        <div className="col-3"   key={item.id}>
          <ProductItem
            item={item}
            setSelectedProduct={this.props.setSelectedProduct}
            addToCart={this.props.addToCart}
          
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}
