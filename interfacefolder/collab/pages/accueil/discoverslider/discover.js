import React from 'react';
import Slider from 'react-slick';
import './slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: 'UM6P',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, tenetur! Perspiciatis, doloribus laboriosam. Suscipit voluptatum obcaecati ab?',
          image: './images/IMG3.png',
        },
        {
            title: 'UM6P',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, tenetur! Perspiciatis, doloribus laboriosam. Suscipit voluptatum obcaecati ab?',
            image: './images/IMG3.png',
          },
          {
            title: 'UM6P',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, tenetur! Perspiciatis, doloribus laboriosam. Suscipit voluptatum obcaecati ab?',
            image: './images/IMG3.png',
          },
          {
            title: 'UM6P',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, tenetur! Perspiciatis, doloribus laboriosam. Suscipit voluptatum obcaecati ab?',
            image: './images/IMG3.png',
          },
        // Add other items similarly
      ],
    };
  }

  render() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      };
    // good 4pc 
    // const settings = {
    //     infinite: true,
    //     slidesToShow: 2, 
    //     slidesToScroll: 1,
    //     centerMode: true, 
    //     centerPadding: '120px', 
    //   };
    

    return (
      <div className="contenu">
        <section className="slide-section">
          <div className="container-fluid">
            <h2 className="line-title">Discover</h2>
            <Slider {...settings}>
              {this.state.items.map((item, index) => (
                <div key={index}>
                  <div className="item" style={{ backgroundImage: `url(${item.image})` }}>
                    <div className="item-desc">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    );
  }
}

export default Discover;
