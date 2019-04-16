import React, { Component } from 'react';
import './Main.scss';

export default class Main extends Component {
  state = {};

  componentDidMount() {
    setInterval(this.time, 250);
  }

  time = () => {
    fetch('/api/time')
      .then(response => response.text())
      .then(message => {
        this.setState({ message: message });
      });
  };

  render() {
    return (
      <div className="Main">
        <div className="card rounded">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h2>안녕하세요!</h2>
              <h1 className="service"> 전자정부서비스 </h1>
              <h2>입니다</h2>
            </div>
          </div>
        </div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
