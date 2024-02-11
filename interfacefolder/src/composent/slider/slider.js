
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import { dataDigitalBestSeller } from './data';
// import imgGirl from 'images/IMG3.png';


function SliderDis() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      // linkDefault: imgGirl,
    }));
  };

  return (
    <div className="Slider">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item, index) => (
          <div className="" key={index}>
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <div className="image-title">
                <h1>{item.title}</h1>
                <h1>{item.title}</h1>

              </div>
            </div>
            <div className="card-bottom">
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderDis;
