import React from "react";
import { render } from "react-dom";

export default class Nom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: "Ayoub" };
  }
  changenom = () => {
    this.setState({ nom: "Rayan" });
  };
  render() {
    return (
      <div className="center">
        <p>
          <i>actual name :</i>
          {this.state.nom}
        </p>
        <button onClick={this.changenom}>changernom</button>
      </div>
    );
  }
}
