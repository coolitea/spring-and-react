import React, { Component } from "react";

class App extends Component {
  state = {};

  componentDidMount() {
    setInterval(this.hello, 250);
  }

  hello = () => {
    fetch("/api/hello")
      .then(response => response.text())
      .then(message => {
        this.setState({ message: message });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <h2>안녕하세요!</h2>
        <ul>
          <li>Backend : Spring Boot</li>
          <li>Frontend : React </li>
        </ul>
      </div>
    );
  }
}

export default App;
