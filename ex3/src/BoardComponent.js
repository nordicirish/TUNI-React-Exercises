import React from "react";
import SquareComponent from "./SquareComponent";
import "./App.css";

function BoardComponent() {
  const squaresArray = [];

  for (let i = 0; i < 64; i++) {
    squaresArray.push(<SquareComponent key={i} number={i} />);
    // need both React key and index number
    // react keys can't be passed as props to components
  }
  return (
    <div
      style={{
        minWidth: "400px",
        minHeight: "400px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squaresArray}
    </div>
  );
}
export default BoardComponent;
