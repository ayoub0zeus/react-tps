import React from "react";

export default class Results extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: [
            {
              title: "UM6P",
              location: 'Benguerir',
              imageUrl: './images/IMG6.jpg',
            }
            // Add more data objects as needed
          ]
        }
    }

  render(){
    return (
      <>
        <div className="container-fluid ">
          <div className="d-flex justify-content-between mt-3">
            <h2 className="line-title">
              <b>Résultats</b>
            </h2>
          </div>
        </div>
        <div>
        {this.state.data.map((item, index) => (
          <a href="#" className="text-dark" key={index}>
            <div className="card mb-3 border-1 shadow my-2  w-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="img-fluid rounded-start"
                    style={{ borderRadius: 12, width: '100%', height: '100%' }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="card-title">{item.title}</h1>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{item.location}</span>
                      <div className="d-flex gap-2">
                        <i className=" fa-regular fa-bookmark fa-3x" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      </>
    );
  }
}
