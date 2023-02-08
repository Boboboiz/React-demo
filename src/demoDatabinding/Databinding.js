import React, { Component } from "react";

export default class Databinding extends Component {
  fullName = "Huy";
  age = "20";
  showInfo() {
    const email = "huydeptrai@gmail.com ";
    return this.fullName + this.age + email;
  }
  // func không có tham số đầu vào
  showMessage() {
    alert("hello");
  }
  // func có tham số đầu vào
  showMessage2(message) {
    alert(message);
  }
  // func có this (dùng arrow function)
  showMessage3 =  () => {
    alert (this.fullName) // con trỏ this ở đây là của Databinding
  }
  render() {
    return (
      <div>
        <button onClick={this.showMessage} className="me-2">
          Show message
        </button>
        <button
          onClick={() => {
            this.showMessage2("hello");
          }}
        >
          Show message2
        </button>
        <button onClick={this.showMessage3} className="ms-2">
          Show message3
        </button>
        <h1>Tên:{this.fullName}</h1>
        <h2>Tuổi:{this.age}</h2>
        <h3>{this.showInfo()}</h3>
      </div>
    );
  }
}
