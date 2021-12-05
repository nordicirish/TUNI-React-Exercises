import React from "react";
import "./App.css";
import FilterButton from "./FilterButtonComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      loading2: true,
      birds: [],
      show: {
        All: false,
        Hawk: false,
        Swan: false,
        Eagle: false,
        Dove: false,
        Raven: false,
      },
    };
    this.buttonCallback = this.buttonCallback.bind(this);
  }

  componentDidMount() {
    // Test json-server and add data using
    // POST request using Fetch (id is added automagically)
    fetch("http://127.0.0.1:3010/birds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "TEST", species: "TEST_SPECIES" }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });

    // Reading data using the Fetch API
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then(
        (jsonObject) => {
          this.setState({
            loading: false,
            birds: jsonObject.birds.concat(this.state.birds),
          });
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      );
  }

  buttonCallback = (species, show) => {
    let newShowData = { ...this.state.show };
    newShowData[species] = show;
    this.setState({ show: newShowData });
  };

  render() {
    if (this.state.error) {
      return <div>Something went wrong! {this.state.error.message}</div>;
    } else if (this.state.loading || this.state.loading2) {
      return <div>Loading...</div>;
    } else {
      let buttons = [];
      if (this.state.show["All"]) {
        buttons.push(
          <FilterButton
            species={"All"}
            callback={this.buttonCallback}
            initShow={this.state.show["All"]}
            key={"All"}
          />
        );
      } else {
        for (let species in this.state.show) {
          console.log(species);
          buttons.push(
            <FilterButton
              species={species}
              callback={this.buttonCallback}
              initShow={this.state.show[species]}
              key={species}
            />
          );
        }
      }

      return (
        <>
          {buttons}
          <ul>
            {this.state.birds.map(
              (being) =>
                (this.state.show["All"] || this.state.show[being.species]) && (
                  <li key={being.id}>
                    {being.name}: {being.species}
                  </li>
                )
            )}
          </ul>
          {/*<ReactLeafletComponent />*/}
        </>
      );
    }
  }
}

export default App;
