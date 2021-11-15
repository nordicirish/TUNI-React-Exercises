import React from "react";

class SquareComponent extends React.Component {
  constructor(props) {
    super(props);
    // number passed as props from BoardComponent
    let number = this.props.number;
    let a = number % 8;
    let b = Math.floor(number / 8);
    // odd numbered squares display black
    // bgColor state holds the square background color
    (a + b) % 2 === 1
      ? (this.state = {
          bgColor: "black",
        })
      : (this.state = {
          bgColor: "white",
        });
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent() {
    // reverses color
    if (this.state.bgColor === "white") {
      this.setState({ bgColor: "black" });
    } else {
      this.setState({ bgColor: "white" });
    }
  }

  render() {
    return (
      <div
        className="square"
        onClick={this.handleClickEvent}
        style={{ backgroundColor: this.state.bgColor }}
      ></div>
    );
  }
}

export default SquareComponent;
