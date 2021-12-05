import React from "react";
import "./App.css";

class FilterButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      species: props.species,
      show: props.initShow,
    };
  }

  clickHandler = async () => {
    await this.setState((state, props) => ({
      show: !state.show,
    }));
    console.log(this.state);
    this.props.callback(this.state.species, this.state.show);
  };

  render() {
    return (
      <button
        onClick={this.clickHandler}
        className={this.state.show ? "button-show" : "button-hide"}
      >
        {this.state.species}
      </button>
    );
  }
}

export default FilterButtonComponent;
