import { Component } from "react";
// import CSS
import "./Header.css"
// class component
class Header extends Component {
  render() {
    return (
      <div className = "container">
        <h1 className = "title">Header</h1>
        <span>This is a header</span>
        <span>Header Header Header!!</span>
      </div>
    );
  }
} // cuối cùng phải return về 1 html (return chỉ trả về 1 thẻ nên nếu nhiều thẻ phải bọc lại)
export default Header