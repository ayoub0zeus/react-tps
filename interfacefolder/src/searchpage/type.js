import React, { Component } from 'react';
import '../styles/style.css'
export default class Type extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: [
        { id: 'myButtone', label: 'All' },
        { id: 'myButton', label: 'Public' },
        { id: 'myButton1', label: 'Prive' },
        { id: 'myButton2', label: 'Etranger' },
        // Add more buttons as needed
      ],
      activeButton: 'myButtone', // Initial active button ID
    };
  }

  componentDidMount() {
    this.handleButtonClick('myButtone');
  }

  handleButtonClick = (buttonId) => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
      button.classList.remove('active');
      button.style.backgroundColor = '#F7F7F7';
    });

    const clickedButton = document.getElementById(buttonId);
    if (clickedButton) {
      clickedButton.classList.add('active');
      clickedButton.style.backgroundColor = '#EF9B11';
    }

    this.setState({ activeButton: buttonId });
  };

  render() {
    const { buttons, activeButton } = this.state;

    return (
      <div className="row ">
        <div className="col-12">
          <div className="container type d-flex justify-content-around my-2">
            {buttons.map(({ id, label }) => (
              <button
                key={id}
                className={`btn btn-lg border-radius mr-3 ${id === activeButton ? 'active' : ''}`}
                id={id}
                onClick={() => this.handleButtonClick(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


