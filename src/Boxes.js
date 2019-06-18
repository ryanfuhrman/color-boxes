import React, { Component } from "react";
import Box from "./Box";
import "./Boxes.css";

export default class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        "lawngreen",
        "chartreuse",
        "limegreen",
        "lime",
        "forestgreen",
        "darkgreen",
        "greenyellow",
        "springgreen",
        "palegreen",
        "mediumseagreen",
        "seagreen",
        "olive",
        "darkolivegreen",
        "olivedrab",
        "yellowgreen",
      ],
    };

    this.shuffleColors = this.shuffleColors.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.differentColor = this.differentColor.bind(this);
  }

  shuffleColors(arr) {
    let array = [...arr];
    let counter = [...array].length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;

      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

  differentColor(array, color) {
    const otherColors = array.filter(i => i !== color);
    return array[Math.floor(Math.random() * otherColors.length)];
  }

  handleClick(e) {
    const boxColor = e.target.attributes.color.value;
    const curColors = [...this.state.colors];
    const newColor = this.differentColor(curColors, boxColor);
    const index = e.target.id;
    curColors[index] = newColor;

    this.setState({
      colors: curColors,
    });
  }

  render() {
    return (
      <div className="Boxes">
        {this.state.colors.map((col, i) => {
          return (
            <Box key={i} id={i} color={col} handleClick={this.handleClick} />
          );
        })}
      </div>
    );
  }
}
