import React, { Component } from "react";
import "./Carousel.css";
export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="container carousel-content">
          <h2>A Warm Welcome!</h2>
          <span>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            quam reprehenderit atque repellendus praesentium nostrum
            voluptatibus facere, repellat amet quas! Fuga nihil inventore
            maiores aut illo reiciendis beatae porro libero.
          </span>
          <button>Call to action!</button>
        </div>
      </div>
    );
  }
}
