import React, { Component } from "react";
import "./Product.css";
export default class Product extends Component {
  render() {
    return (
      <div className="product-item">
        <div className="product-content">
          <div className="row">
            <div className="col">
              <div className="item">
                <div className="img">
                  <img src="https://picsum.photos/200/300" />
                </div>
                <div className="text ">
                  <h2>Card Title</h2>
                  <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laborum quam reprehenderit atque repellendus praesentium
                    nostrum
                  </span>
                </div>
                <div className="product-btn">
                    <button>Find out More!</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
