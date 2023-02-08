import React, { Component } from "react";
import blackCar from "../assets/black-car.jpg";
import redCar from "../assets/red-car.jpg";
import silverCar from "../assets/silver-car.jpg";
import steelCar from "../assets/steel-car.jpg";
import styleCar from "./Car.module.css";
console.log(styleCar);
export default class Car extends Component {
  state = {
    carImg: redCar,
    data: {
      black: blackCar,
      red: redCar,
      silver: silverCar,
      steel: steelCar,
    },
  };
//   changeCar2(color) {
//     let newImage;
//     switch (color) {
//       case "red":
//         newImage = redCar;
//         break;
//       case "black":
//         newImage = blackCar;
//         break;
//       case "silver":
//         newImage = silverCar;
//         break;
//       case "steel":
//         newImage = steelCar;
//         break;
//       default:
//         break;
//     }
//     if (!newImage) return
//     this.setState({
//         carImage : newImage,
//     },()=>{
//         console.log(this.state.carImage)
//     })
//   } CÁCH 2
  changeCar = (color) => {
    this.setState({
      carImg: this.state.data[color],
    }, ()=>{
        console.log(this.state.data[color]);
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img
            style={{borderRadius:'20px', boxShadow:"4px 6px 10px rgba(0,0,0,0.5)"}} // ngoặc nhọn ở ngoài là cú pháp, {} ở trong là style
              className={styleCar.thumbnail}
              src={this.state.carImg}
              alt=""
            />
          </div>
          <div className="col-5">
            <button
              onClick={() => {
                this.changeCar("black");
              }}
              className={`${`${styleCar.btn} btn btn-dark`}btn btn-dark`}
            >
              Black
            </button>
            <button
              onClick={() => {
                this.changeCar("red");
              }}
              className={`${styleCar.btn} btn btn-danger`}
            >
              Red
            </button>
            <button
              onClick={() => {
                this.changeCar("silver");
              }}
              className={`${styleCar.btn} btn btn-secondary`}
            >
              Silver
            </button>
            <button
              onClick={() => {
                this.changeCar("steel");
              }}
              className={`${styleCar.btn} btn btn-light`}
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
