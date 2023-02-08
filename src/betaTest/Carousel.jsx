import React, { Component } from "react";
import { connect } from "react-redux";
import carouselStyle from "./CarouselStyle.module.css";

class Carousel extends Component {
  render() {
    return (
      <div className={`${carouselStyle.carouselBackground} `}>
        <div className="d-flex justify-content-around ">
          {this.props.stocks.data?.map((item, index) => {
            return (
              <span
                key={index}
                className="d-flex align-items-center"
                style={{ flexDirection: "column" }}
              >
                <p style={{ color: "lightgrey" }} className="fw-bold">
                  {item.code}: {item.price.toFixed(2)}
                </p>
                <div>
                  {item.change < 0 ? (
                    <i className="fa-solid fa-circle-arrow-down me-2 text-danger"></i>
                  ) : (
                    <i className="fa-solid fa-circle-arrow-up me-2 text-success"></i>
                  )}

                  <span style={{ color: "lightgrey" }} className="fw-bold">
                    {item.change.toFixed(2)}({item.changePct.toFixed(2)}%)
                  </span>
                </div>
              </span>
            );
          })}
        </div>

        <div className="blog-news row p-2 mt-2">
          <div className="col-4">
            <div className="item d-flex align-items-center ">
              <a href="https://cafef.vn/di-qua-mua-hoa-dep-nhat-tuong-lai-nao-cho-nghe-moi-gioi-chung-khoan-20230206210958489.chn">
                <img
                  src="./images/betaImage/beta2.webp"
                  alt="blog img"
                  width="150px"
                  height="100px"
                />
              </a>
              <div className="blog-content ms-2">
                <a
                  href="https://cafef.vn/di-qua-mua-hoa-dep-nhat-tuong-lai-nao-cho-nghe-moi-gioi-chung-khoan-20230206210958489.chn"
                  style={{ textDecoration: "none" }}
                >
                  <h2
                    className="fw-bold text-light"
                    style={{ fontSize: "15px" }}
                  >
                    Đi qua "mùa hoa đẹp nhất", tương lai nào cho nghề môi giới
                    chứng khoán?
                  </h2>
                  <p
                    className="fw-semibold text-light"
                    style={{ fontSize: "13px" }}
                  >
                    Tại Việt Nam, đã xuất hiện những công ty chứng khoán đi theo
                    xu hướng miễn phí giao dịch...
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="item d-flex align-items-center ">
              <a href="https://cafef.vn/di-qua-mua-hoa-dep-nhat-tuong-lai-nao-cho-nghe-moi-gioi-chung-khoan-20230206210958489.chn">
                <img
                  src="./images/betaImage/beta2.webp"
                  alt="blog img"
                  width="150px"
                  height="100px"
                />
              </a>
              <div className="blog-content ms-2">
                <a
                  href="https://cafef.vn/di-qua-mua-hoa-dep-nhat-tuong-lai-nao-cho-nghe-moi-gioi-chung-khoan-20230206210958489.chn"
                  style={{ textDecoration: "none" }}
                >
                  <h2
                    className="fw-bold text-light"
                    style={{ fontSize: "15px" }}
                  >
                    Đi qua "mùa hoa đẹp nhất", tương lai nào cho nghề môi giới
                    chứng khoán?
                  </h2>
                  <p
                    className="fw-semibold text-light"
                    style={{ fontSize: "13px" }}
                  >
                    Tại Việt Nam, đã xuất hiện những công ty chứng khoán đi theo
                    xu hướng miễn phí giao dịch...
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="item d-flex align-items-center ">
              <a href="https://cafef.vn/di-qua-mua-hoa-dep-nhat-tuong-lai-nao-cho-nghe-moi-gioi-chung-khoan-20230206210958489.chn">
                <img
                  src="./images/betaImage/beta2.webp"
                  alt="blog img"
                  width="150px"
                  height="100px"
                />
              </a>
              <div className="blog-content ms-2">
                <a
                  href="https://cafef.vn/di-qua-mua-hoa-dep-nhat-tuong-lai-nao-cho-nghe-moi-gioi-chung-khoan-20230206210958489.chn"
                  style={{ textDecoration: "none" }}
                >
                  <h2
                    className="fw-bold text-light"
                    style={{ fontSize: "15px" }}
                  >
                    Đi qua "mùa hoa đẹp nhất", tương lai nào cho nghề môi giới
                    chứng khoán?
                  </h2>
                  <p
                    className="fw-semibold text-light"
                    style={{ fontSize: "13px" }}
                  >
                    Tại Việt Nam, đã xuất hiện những công ty chứng khoán đi theo
                    xu hướng miễn phí giao dịch...
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    stocks: state.betaReducer.stocks,
  };
};
export default connect(mapStateToProps)(Carousel);
