import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
  render() {
    const { id, color, handleClick } = this.props;
    return (
      <div
        className="Box"
        id={id}
        color={color}
        style={{
          backgroundColor: color,
        }}
        onClick={handleClick}
      />
    );
  }
}
