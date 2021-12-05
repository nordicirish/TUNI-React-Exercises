import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const birds = [
  {
    id: 1,
    location: "Tampere",
    species: "Hawk",
    date: "2021-05-30T17:30:31.098Z",
  },
  {
    id: 2,
    location: "Kangasala",
    species: "Eagle",
    date: "2021-06-30T17:30:31.098Z",
  },
  {
    id: 3,
    location: "Nokia",
    species: "Hawk",
    date: "2021-08-30T17:30:31.098Z",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App birds={birds} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
