import React from "react";
import "../App.css";
import { Button } from "grommet";

export default class ChangeVisivility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };

    this.change = this.change.bind(this);
  }

  change() {
    this.setState({
      visibility: !this.state.visibility,
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.visibility ? <h1>Now you see me!</h1> : ""}
        <Button
          primary
          onClick={this.change}
          style={{
            width: "200px",
          }}
        >
         Переключить видимость надписи
        </Button>
      </div>
    );
  }
}
