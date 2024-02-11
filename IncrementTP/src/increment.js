import React from "react";

export default class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }
  inc = () => {
    this.setState({ num: this.state.num + 1 });
  };
  dec = () => {
    this.setState({ num: this.state.num - 1 });
  };

  render() {
    return (
      <div className="center">
        <p>
          <i>actual number :</i>
          <i> {this.state.num}</i>
        </p>
        <button onClick={this.inc}>incrementer</button>
        <button onClick={this.dec}>decrementer</button>
      </div>
    );
  }
}
