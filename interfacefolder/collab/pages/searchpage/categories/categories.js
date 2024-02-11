import React, { Component, createRef } from 'react';
import Hammer from 'hammerjs';

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.sliderButtonsRef = createRef();
    this.hammer = null;
    this.currentIndex = 0;
  }

  componentDidMount() {
    this.initSlider();
  }

  initSlider = () => {
    const sliderButtons = this.sliderButtonsRef.current;
    this.hammer = new Hammer(sliderButtons, { velocity: 0.1 });

    this.hammer.on('panleft panright', (e) => {
      if (e.type === 'panright' && this.currentIndex > 0) {
        this.currentIndex--;
      } else if (e.type === 'panleft' && this.currentIndex < sliderButtons.children.length - 4) {
        this.currentIndex++;
      }
      this.updateSlider();
    });
  };

  updateSlider = () => {
    const sliderButtons = this.sliderButtonsRef.current;
    if (this.currentIndex === sliderButtons.children.length - 3) {
      this.currentIndex = 0;
    }
    const translateValue = -this.currentIndex * (75 + 10);
    sliderButtons.style.transform = `translateX(${translateValue}px)`;
  };

  render() {
    return (
      <div className="slider-container mt-4 ">
        <div className="slider-buttons categories" ref={this.sliderButtonsRef}>
          <div className="slider-button">Sante</div>
          <div className="slider-button">Sport</div>
          <div className="slider-button">Commerce</div>
          <div className="slider-button">Economy</div>
          <div className="slider-button">informatique</div>
          <div className="slider-button">Architecture</div>
          <div className="slider-button">Militaire</div>
          <div className="slider-button">Tourisme</div>
          <div className="slider-button">Social</div>
          <div className="slider-button">Enseignemen</div>
          <div className="slider-button">Aviation</div>
          <div className="slider-button">Aviation</div>
        </div>
      </div>
    );
  }
}


