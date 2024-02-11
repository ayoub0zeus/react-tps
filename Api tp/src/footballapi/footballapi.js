import React, { useEffect, useState } from "react";
import axios from "axios";
import "./footballapi.css";

function FootballApiFunction() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    const  options = {
      method: "GET",
      url: "https://free-football-soccer-videos.p.rapidapi.com/",
      headers: {
        "X-RapidAPI-Key": "c4f388db6bmshec85fd6468c5153p1d78a6jsncb4194c45520",
        "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
      },
    };
     axios
      .request(options)
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const uniqueCompetitions = [
    ...new Set(matches.map((match) => match.competition.name)),
  ];

  return (
    <div className="container my-4">
      {uniqueCompetitions.map((competition) => (
        <div key={competition} className="league">
          <span className="leagueName d-flex justify-content-center ">
            {competition}
          </span>
          <div className="matches">
            {matches
              .filter((match) => match.competition.name === competition)
              .map((match) => (
                <div key={match.title} className="row">
                  <div className="col-3" />
                  <div className="col-2 ">{match.side1.name} </div>
                  <div className="col-2 my-3">
                    <p>{new Date(match.date).toLocaleDateString()}</p>
                    <p>{new Date(match.date).toLocaleTimeString()}</p>
                  </div>
                  <div className="col-2">{match.side2.name}</div>
                </div>
              ))}
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FootballApiFunction;
