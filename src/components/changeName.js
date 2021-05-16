import React from "react";
import "../App.css";
import { Button } from "grommet";

export default class ChangeName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vadik",
    };

    this.change = this.change.bind(this);
  }

  change() {
    if (this.state.name === "Vadik") {
      this.setState({
        name: "Vika",
      });
    } else if (this.state.name === "Vika") {
      this.setState({
        name: this.props.name,
      });
    } else {
      this.setState({
        name: "Vadik",
      });
    }
  }

  render() {
    const name = this.state.name;
    return (
      <div className="App">
        <h1>Hello, {name}!</h1>
        <Button
          primary
          onClick={this.change}
          style={{
            width: "200px",
          }}
        >
          Изменить имя
        </Button>
      </div>
    );
  }
}

ChangeName.defaultProps = { name: "Vadim" };
