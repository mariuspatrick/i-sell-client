import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    item: null,
    error: null,
  };

  componentDidMount() {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => this.setState({ item: data }))
      .catch((err) => this.setState({ error: err }));
  }

  render() {
    const error = this.state.error;
    const item = this.state.item;

    error && console.log("Error: ", error);
    item && console.log("Item: ", item);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
