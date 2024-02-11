import React, { Component } from 'react';
import axios from 'axios';


class Fot33 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const options = {
      method: 'GET',
      url: 'https://soccer-data.p.rapidapi.com/team/squad',
      params: { teamId: '803' },
      headers: {
        'X-RapidAPI-Key': 'c4f388db6bmshec85fd6468c5153p1d78a6jsncb4194c45520',
        'X-RapidAPI-Host': 'soccer-data.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(response => {
        this.setState({ players: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { players } = this.state;

    return (
      <>
        <div className="container my-4">
        {players.map(player => (
          <div key={player.player.id} className="player-info">
            <h4>{player.player.knownName}</h4>
            <p>Country: {player.player.country.name}</p>
            <p>Position: {player.player.position.name}</p>
            <p>Shirt Number: {player.player.shirtNumber}</p>
            <p>Age: {player.player.age}</p>
            <h5>Tournaments:</h5>
            <ul>
              {player.tournaments.map(tournament => (
                <li key={tournament.tournament.id}>
                  {tournament.tournament.name} - {tournament.season.name}
                </li>
              ))}
            </ul>
            <hr />
          </div>
        ))}
      </div>
      
      </>
    );
  }
}

export default Fot33;
