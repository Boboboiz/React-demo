import React, { Component } from "react";
import style from "./HomeStyle.module.css";

export default class Home extends Component {

  state = {
    id: 1,
    url: "./glassesImage/v1.png",
    name: "GUCCI G8850U",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  };
  setSelectedGlass = (id) => {
    let newImg;
    let newName;
    let newDesc;
    switch (id) {
      case "1":
        newImg = "./glassesImage/v1.png";
        newName = "GUCCI G8850U";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "2":
        newImg = "./glassesImage/v2.png";
        newName = "GUCCI G8759H";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "3":
        newImg = "./glassesImage/v3.png";
        newName = "DIOR D6700HQ";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "4":
        newImg = "./glassesImage/v4.png";
        newName = "DIOR D6005U";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "5":
        newImg = "./glassesImage/v5.png";
        newName = "PRADA P8750";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "6":
        newImg = "./glassesImage/v6.png";
        newName = "PRADA P9700";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "7":
        newImg = "./glassesImage/v7.png";
        newName = "FENDI F8750";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "8":
        newImg = "./glassesImage/v8.png";
        newName = "FENDI F8500";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      case "9":
        newImg = "./glassesImage/v9.png";
        newName = "GUCCI G8850U";
        newDesc =
          "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ";
        break;
      default:
        break;
    }
    if (!newImg) return;

    this.setState(
      {
        url: newImg,
        name: newName,
        desc: newDesc,
      },
      () => {}
    );
  };
  render() {
    return (
      <div>
        <div className={`${style.home} `}>
          <div className={`${style.header} `}>
            <h2
              className="text-light text-center lh-lg"
              style={{ opacity: "0.9" }}
            >
              TRY GLASSES APP ONLINE
            </h2>
          </div>
          <div className="container">
            <div className={style.main}>
              <div className="model-left " style={{ position: "relative" }}>
                <img src={"./glassesImage/model.jpg"} alt="" />
                <img className={`${style.glass}`} src={this.state.url} alt="" />
                <div className={style.infoGlass}>
                  <h2 className="fw-bold fs-5 lh-base" style={{ color: "purple" }}>
                    {this.state.name}
                  </h2>
                  <p className="fw-semibold fs-7 text-light">{this.state.desc}</p>
                </div>
              </div>
              <div className="model-right ">
                <img src="./glassesImage/model.jpg" alt="" />
              </div>
            </div>
            <div className={style.footer}>
              <button
                onClick={() => {
                  this.setSelectedGlass("1");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v1.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("2");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v2.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("3");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v3.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("4");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v4.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("5");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v5.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("6");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v6.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("7");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v7.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("8");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v8.png" alt="" />
              </button>
              <button
                onClick={() => {
                  this.setSelectedGlass("9");
                }}
                className="btn btn-light"
              >
                <img src="./glassesImage/v9.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
