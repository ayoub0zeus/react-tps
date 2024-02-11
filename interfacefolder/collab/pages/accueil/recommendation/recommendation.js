import React from "react";

class RecommendationSection extends React.Component {
  render() {
    const recommendations = [
      { id: 1, title: "UM6P", location: 'Benguerir', imageUrl: './images/IMG6.jpg' },
      { id: 2, title: "ENCG", location: 'Benguerir', imageUrl: './images/IMG6.jpg' },
      { id: 3, title: "UM6P", location: 'Benguerir', imageUrl: './images/IMG6.jpg' },
      { id: 4, title: "ENS", location: 'Benguerir', imageUrl: './images/IMG6.jpg' },
    ];

    return (
      <div className="container-fluid">
        <div className="d-flex justify-content-between mt-2 line-title">
          <h2 className=" ">Recommendation</h2>
          <a href="#" style={{ color: '#858585'}}><span>See more</span></a>
        </div>

        {recommendations.map((recommendation) => (
          <a key={recommendation.id} href="#" className="text-dark">
            <div className="card mb-3 border-1 shadow my-2  w-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={recommendation.imageUrl} alt={recommendation.title} className="img-fluid rounded-start" style={{ borderRadius: '12px', width: '100%', height: '100%' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h1 className="card-title">{recommendation.title}</h1>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{recommendation.location}</span>
                      <div className="d-flex gap-2">
                        <i className="fa-regular fa-bookmark fa-3x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

export default RecommendationSection;
