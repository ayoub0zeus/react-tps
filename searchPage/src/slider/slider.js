import React, { Component } from 'react';
import './slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  // Charger les images dans un tableau
  images = [
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
    'https://source.unsplash.com/random',
  ];

  // Changer d'image au clic sur les boutons
  handleButtonClick = (newIndex) => {
    this.setState({ slideIndex: newIndex });
  };

  // Afficher l'image correspondant à l'index du slide
  showImage = () => {
    return <img className="slide-image" src={this.images[this.state.slideIndex]} alt="Slide" />;
  };

  // Afficher les boutons de navigation
  showButtons = () => {
    let buttons = [];
    for (let i = 0; i < this.images.length; i++) {
      buttons.push(
        <button
          key={i}
          className={`slide-button ${this.state.slideIndex === i ? 'active' : ''}`}
          onClick={() => this.handleButtonClick(i)}
        >
          &bull;
        </button>
      );
    }
    return buttons;
  };

  render() {
    return (
      <div className="Slider">
        <div className="slider">
          {this.showImage()}
          <div className="slider-buttons">{this.showButtons()}</div>
        </div>
      </div>
    );
  }
}

export default Slider;
