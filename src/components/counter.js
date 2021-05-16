import React from "react";
import "../App.css";
import { Button } from "grommet";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const count = this.state.count;
    return (
      <div className="App">
        <h1>Current: {count}</h1>
        <Button
          primary
          onClick={this.decrement}
          style={{
            width: "20px",
            marginRight: "5px",
          }}
        >
          -
        </Button>
        <Button
          primary
          onClick={this.reset}
          style={{
            width: "100px",
            marginRight: "5px",
          }}
        >
          Сбросить
        </Button>
        <Button
          primary
          onClick={this.increment}
          style={{
            width: "20px",
          }}
        >
          +
        </Button>
      </div>
    );
  }
}
