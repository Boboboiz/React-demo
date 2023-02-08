import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container header-content">
          <div className="header-left">
            <span>Start Boostrap</span>
          </div>
          <div className="header-right">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
