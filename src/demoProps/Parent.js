import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  // props dùng để chứa dữ liệu truyền vào ko chỉnh sửa được
  children= [
    { id: 1, name: "huy", avatar: "huy.png" },
    { id: 2, name: "hieu", avatar: "hieu.png" },
    { id: 3, name: "truong", avatar: "truong.png" },
  ];
  renderChildren = ()=> {
    return this.children.map((item)=>{
        return <Child setAvatar={this.props.setAvatar} key={item.id} item={item} />
    })
     
  }
  render() {
    return (
      <div className="bg-primary p-3 me-5">
        <h1>Parent</h1>
        <h2>email:{this.props.email}</h2>
        <h2>age: {this.props.age}</h2>
        {this.renderChildren()}
        {/* <Child
          email={this.props.email}
          age={this.props.age}
          setAvatar={this.props.setAvatar}
        /> */}
      </div>
    );
  }
}
