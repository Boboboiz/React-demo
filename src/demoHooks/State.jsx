// snippet: rfce
import React, { useState } from "react";

function State() {
  // useState nhận vào một tham số là giá trị khởi tạo của state và return về một array gồm phần tử
  // Phần tử 1: giá trị của state
  // Phần tử 2: hàm dùng để thay đổi giá trị của state
  // useState phải được sử dụng ở cấp độ cao nhất của component, không được sử dụng trên trong các block if-else, for, function của component đó
  const [count, setCount] = useState(0);

  // Nếu muốn khai báo nhiều state ta gọi hook useState nhiều lần
  const [message, setMessage] = useState("Hello BC38");

  // State là array
  const [colors, setColors] = useState(["red", "green", "blue"]);
  const addColor = () => {
    const color = prompt("Input your color:");
    setColors([...colors, color]);
  };
  const removeColor = () => {
    const color = prompt("Input your color:");
    const colorsClone = colors.filter((item) => {
      return item !== color;
    });
    setColors(colorsClone);
    // const cloneColor =[...colors]
    // const indexColor = cloneColor.findIndex(item=> {
    //     return item === color
    // })
    // if(indexColor !== -1) {
    //     cloneColor.splice(indexColor,1)
    // }
    // setColors(cloneColor)
  };

  // OBJECT
  const [user, setUser] = useState({username:"", email:""})
  const handleChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }
  return (
    <div>
      <h1>State</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <p>Message: {message}</p>
      <button onClick={() => setMessage("Hello Cybersoft")}>Set Message</button>

      <p>Colors: {colors.join(", ")}</p>
      <button onClick={addColor}>Add Color</button>
      <button onClick={removeColor}>Remove Color</button>

      <div>
        <p>User: {user.username} - {user.email}</p>
        <input name="username" value={user.username} onChange={handleChange} placeholder="username"/>
        <input name="email" value={user.email} onChange={handleChange} placeholder="email"/>
      </div>
    </div>
  );
}

export default State;
