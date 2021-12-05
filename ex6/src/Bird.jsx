import React from "react";

const Bird = ({ bird }) => {
  return (
    <li>
      <b>Species: </b> {bird.species} <b>Location: </b>
      {bird.location} <b>Date and time: </b>
      {bird.date}
    </li>
  );
};

export default Bird;
