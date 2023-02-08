import React, { Component } from "react";
import Parent from "./Parent";
import Uncle from "./Uncle";

export default class Grand extends Component {
  email = "lenambaohuy@deptrai.com";
  age = 20;
  state = {
    avatar:""
  }
  avatar = ""; // biến hứng dữ liêu từ component con truyền tới
  // hàm set biến hứng, tham số đầu vào là dữ liệu từ component con
  setAvatar = (dataFromChild) => {
    this.setState({
        avatar : dataFromChild,
    })
    
  }
  render() {
    return (
      <div className="bg-success p-3">
        <h1>Grandpa</h1>
        <div className="d-flex ">
          <Parent
            email={this.email}
            age={this.age}
            setAvatar={this.setAvatar}
          />
          <Uncle avatar={this.state.avatar} />
        </div>
      </div>
    );
  }
}
