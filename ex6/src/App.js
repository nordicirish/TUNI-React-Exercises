import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Bird from "./Bird";

const App = () => {
  // useState function to initialize the piece of state stored in birds with the array of birds passed in the props:
  const [birds, setBirds] = useState([]);
  const [newBird, setNewBird] = useState("bird type...");
  const [newLocation, setNewLocation] = useState("location...");
  // const [showSpecies, setShowSpecies] = useState("search by species")

  //useEffect hooks fetches data using axios
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3010/birds").then((response) => {
      console.log("promise fulfilled");
      setBirds(response.data);
    });
  }, []);
  console.log("render", birds.length, "birds");

  // event handlers
  const addBird = (event) => {
    event.preventDefault();
    //stops page reload and other unwanted default behaviour
    const birdObject = {
      species: newBird,
      date: new Date().toLocaleString(undefined),
      location: newLocation,
    };
    axios.post("http://localhost:3010/birds", birdObject).then((response) => {
      console.log(response);
      setBirds(birds.concat(response.data));
      setNewBird("");
      setNewLocation("");
    });
  };

  const handleBirdChange = (event) => {
    console.log(event.target.value);
    setNewBird(event.target.value);
  };

  const handleLocationChange = (event) => {
    console.log(event.target.value);
    setNewLocation(event.target.value);
  };

  return (
    <div className="container">
      <div className="box">
        <h1>Birdwatcher App</h1>
        <form className="input-form" onSubmit={addBird}>
          <label>
            Enter the bird type:{" "}
            <input value={newBird} onChange={handleBirdChange} />
          </label>

          <label>
            Enter the location:{" "}
            <input value={newLocation} onChange={handleLocationChange} />
          </label>

          <button className="input-button" stype="submit">
            Save
          </button>
        </form>
        <h2>Observations</h2>
        <ul>
          {birds.map((bird) => (
            <Bird key={bird.id} bird={bird} />
          ))}
        </ul>

        {/* <form onSubmit={addBird}>
        <input value={newBird} onChange={handleBirdChange} />
        <input value={newLocation} onChange={handleLocationChange} />
        <button type="submit">save</button>
      </form> */}
      </div>
    </div>
  );
};

export default App;
