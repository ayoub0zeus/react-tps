import React, { Component } from 'react';
import axios from 'axios';
import './foot3.css';

class Fotoo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const options = {
      method: 'GET',
      url: 'https://football-data1.p.rapidapi.com/tournament/fixture',
      params: { tournamentId: '9' },
      headers: {
        'X-RapidAPI-Key': 'c4f388db6bmshec85fd6468c5153p1d78a6jsncb4194c45520',
        'X-RapidAPI-Host': 'football-data1.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      this.setState({ fixtures: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { fixtures } = this.state;

    return (
      <div className="container my-4">
        {fixtures.map(fixture => (
          <div key={fixture.id} className="fixture-info">
            <h4>{fixture.homeTeam.name} vs {fixture.awayTeam.name}</h4>
            <p>Date: {new Date(fixture.date).toLocaleString()}</p>
            <p>Status: {fixture.status.name}</p>
            <p>Stage: {fixture.stage.name}</p>
            <p>Round: {fixture.round.name}</p>
            <div className="score-info">
              <div className="home-team">
                <h5>{fixture.homeTeam.name}</h5>
                <p>Score: {fixture.homeTeam.score.regular}</p>
              </div>
              <div className="away-team">
                <h5>{fixture.awayTeam.name}</h5>
                <p>Score: {fixture.awayTeam.score.regular}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Fotoo;
