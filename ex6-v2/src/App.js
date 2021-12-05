import React from "react";
import "./App.css";
import FilterButton from "./FilterButtonComponent";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      loading2: true,
      beings: [],
      show: {
        All: false,
        Minbari: false,
        Narn: false,
        Human: false,
        Centauri: false,
        Vorlon: false,
      },
    };
    this.buttonCallback = this.buttonCallback.bind(this);
  }

  componentDidMount() {
    // Test json-server and add data using
    // POST request using Fetch (id is added automagically)
    fetch("http://127.0.0.1:3010/beings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "TEST", species: "TEST_SPECIES" }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });

    // Reading data using the Fetch API
    fetch("http://127.0.0.1:3000/")
      .then((res) => res.json())
      .then(
        (jsonObject) => {
          this.setState({
            loading: false,
            beings: jsonObject.beings.concat(this.state.beings),
          });
        },
        (error) => {
          this.setState({
            loading: false,
            error,
          });
        }
      );

    // Reading data using Axios
    /*     axios.get("http://127.0.0.1:3010/beings").then(
      (resp) => {
        this.setState({
          loading2: false,
          beings: resp.data.concat(this.state.beings),
        });
      },
      (error) => {
        this.setState({
          loading2: false,
          error,
        });
      }
    );

    axios.get("http://127.0.0.1:3000").then((resp) => {
      console.log("species: ", resp.data);
    }); */
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
            {this.state.beings.map(
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
