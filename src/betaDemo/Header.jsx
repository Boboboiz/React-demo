import React, { Component } from "react";
import headerStyle from './HeaderStyle.module.css'
export default class Header extends Component {
  render() {
    return (
      <div className="bg-dark container ">
        <div className=" p-2  text-light row">
          <div className="nav col-8">
            <a
              href="#"
              className="me-5 text-decoration-none text-light fw-bold fs-6"
            >
              Trang chủ
            </a>
            <a
              href="#"
              className="me-5 text-decoration-none text-light fw-bold fs-6"
            >
              Thị trường
            </a>
            <a
              href="#"
              className="me-5 text-decoration-none text-light fw-bold fs-6"
            >
              Ngành
            </a>
            <a
              href="#"
              className="me-5 text-decoration-none text-light fw-bold fs-6"
            >
              Vĩ mô
            </a>
            <a
              href="#"
              className="me-5 text-decoration-none text-light fw-bold fs-6"
            >
              Công cụ đầu tư
            </a>
            <a
              href="#"
              className="me-5 text-decoration-none text-light fw-bold fs-6"
            >
              Trung tâm tin tức
            </a>
          </div>
          <div className="icon col-4">
            <div className="d-flex align-items-center">
              <i className={`${headerStyle.icon} fa-regular fa-bell me-4 fs-3`} />
              <i className={`${headerStyle.icon} fa-regular fa-comment-dots me-4 fs-3`} />
              <div className="position-relative">
                <input className={`${headerStyle.input} rounded-pill p-1 px-2 border border-0`} type="text" placeholder="Tìm mã chứng khoán" />
                <i className={`${headerStyle.iconPosition} fa-solid fa-magnifying-glass`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
