import React, { Component } from "react";
import { connect } from "react-redux";
import carouselStyle from "./CarouselStyle.module.css";
import Marquee from "react-fast-marquee";
class Carousel extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Marquee speed={150} pauseOnHover="true" gradientColor="[0,0,0]">
          <div className="d-flex justify-content-around ">
            {this.props.dataCarousel.recordset?.map((item, index) => {
              return (
                <div className={`${carouselStyle.carousel} p-2 me-3`}>
                  <div className="d-flex flex-column align-items-center text-light fw-semibold">
                    <span>
                      {item.ticker} : {item.diemso}
                    </span>
                    <span>
                      {item.percent_d < 0 ? (
                        <i className="fa-solid fa-circle-arrow-down text-danger me-2"></i>
                      ) : (
                        <i className="fa-solid fa-circle-arrow-up text-success me-2"></i>
                      )}
                      {item.percent_d}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Marquee>
        <Marquee speed={100} pauseOnHover="true" gradientColor="[0,0,0]">
        <div className="blog-news mt-2 p-2 ">
          <div className="row">
            <div className="col-3 d-flex  align-items-center  justify-content-center    ">
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
              >
                <img
                  src="./images/betaImage/betaDemo.webp"
                  alt="blog img"
                  width={175}
                  height={100}
                />
              </a>
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
                className="text-decoration-none fw-semibold text-light ms-2 "
                style={{fontSize:"13px"}}
              >
               <span>GDP tăng trưởng cao nhất một thập kỷ, vì sao VN-Index vẫn “quanh quẩn” mốc 1.000 điểm?</span>
              </a>
           
            </div>
            <div className="col-3 d-flex  align-items-center  justify-content-center    ">
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
              >
                <img
                  src="./images/betaImage/betaDemo.webp"
                  alt="blog img"
                  width={175}
                  height={100}
                />
              </a>
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
                className="text-decoration-none fw-semibold text-light ms-2 "
                style={{fontSize:"13px"}}
              >
               <span>GDP tăng trưởng cao nhất một thập kỷ, vì sao VN-Index vẫn “quanh quẩn” mốc 1.000 điểm?</span>
              </a>
           
            </div>
            <div className="col-3 d-flex  align-items-center  justify-content-center    ">
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
              >
                <img
                  src="./images/betaImage/betaDemo.webp"
                  alt="blog img"
                  width={175}
                  height={100}
                />
              </a>
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
                className="text-decoration-none fw-semibold text-light ms-2 "
                style={{fontSize:"13px"}}
              >
               <span>GDP tăng trưởng cao nhất một thập kỷ, vì sao VN-Index vẫn “quanh quẩn” mốc 1.000 điểm?</span>
              </a>
           
            </div>
            <div className="col-3 d-flex  align-items-center  justify-content-center    ">
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
              >
                <img
                  src="./images/betaImage/betaDemo.webp"
                  alt="blog img"
                  width={175}
                  height={100}
                />
              </a>
              <a
                href="https://cafef.vn/gdp-tang-truong-cao-nhat-mot-thap-ky-vi-sao-vn-index-van-quanh-quan-moc-1000-diem-20230213231101125.chn"
                target="blank"
                className="text-decoration-none fw-semibold text-light ms-2 "
                style={{fontSize:"13px"}}
              >
               <span>GDP tăng trưởng cao nhất một thập kỷ, vì sao VN-Index vẫn “quanh quẩn” mốc 1.000 điểm?</span>
              </a>
           
            </div>
          </div>
        </div>
        </Marquee>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataCarousel: state.demoReducer.dataCarousel,
  };
};
export default connect(mapStateToProps)(Carousel);
