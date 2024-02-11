import React from "react";
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Ayoub" };
  }
  change = () => {
    this.setState({ name: "Dahir" });
  };
  render() {
    return (
      <>
        <p>Your Name is {this.state.name}</p>
        <button onClick={this.change}> Changer le Nom</button>
      </>
    );
  }
}
