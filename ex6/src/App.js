import React, { useState } from "react";
import "./App.css";
import Bird from "./Bird";

const App = (props) => {
  // useState function to initialize the piece of state stored in birds with the array of birds passed in the props:
  const [birds, setBirds] = useState(props.birds);
  const [newBird, setNewBird] = useState("bird type...");
  const [newLocation, setNewLocation] = useState("location...");
  // const [showSpecies, setShowSpecies] = useState("search by species")

  // event handlers
  const addBird = (event) => {
    event.preventDefault();
    //stops page reload and other inwanted default behaviour
    const birdObject = {
      species: newBird,
      date: new Date().toLocaleString(undefined),
      location: newLocation,
      id: birds.length + 1,
    };
    setBirds(birds.concat(birdObject));
    setNewBird("");
    setNewLocation("");
    //clears text box
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
    <div>
      <h1>Birds Spotted</h1>

      <ul>
        {birds.map((bird) => (
          <Bird key={bird.id} bird={bird} />
        ))}
      </ul>
      <form onSubmit={addBird}>
        <label>
          Enter the bird type:{" "}
          <input value={newBird} onChange={handleBirdChange} />
        </label>
        <br />
        <label>
          Enter the location:{" "}
          <input value={newLocation} onChange={handleLocationChange} />
        </label>
        <br />
        <button type="submit">save</button>
      </form>
      {/* <form onSubmit={addBird}>
        <input value={newBird} onChange={handleBirdChange} />
        <input value={newLocation} onChange={handleLocationChange} />
        <button type="submit">save</button>
      </form> */}
    </div>
  );
};

export default App;
