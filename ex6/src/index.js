import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

/* import axios from "axios"; 

axios.get("http://localhost:3010/birds").then((response) => {
  const birds = response.data;
  ReactDOM.render(<App birds={birds} />, document.getElementById("root"));
}); */

ReactDOM.render(<App />, document.getElementById("root"));

/* const birds = [
  {
    id: 1,
    location: "Tampere",
    species: "Hawk",
    date: "05/12/2021, 20:56:53",
  },
  {
    id: 2,
    location: "Kangasala",
    species: "Eagle",
    date: "04/12/2021, 10:56:53",
  },
  {
    id: 3,
    location: "Nokia",
    species: "Hawk",
    date: "03/12/2021, 20:40:23",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App birds={birds} />
  </React.StrictMode>,
  document.getElementById("root")
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
