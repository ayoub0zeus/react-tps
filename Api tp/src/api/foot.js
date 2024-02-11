import React, { useState, useEffect } from "react";
import axios from "axios";
import "./foot.css";

function Games() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // const options = {
    //   method: "GET",
    //   url:
    //     "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&date=today",
    //   headers: {
    //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "c4f388db6bmshec85fd6468c5153p1d78a6jsncb4194c45520",
    //   },
    // };
    const options = {
      method: 'GET',
      url: 'https://free-football-soccer-videos.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '5d6d088dd2msh955a40af0037247p128fc2jsn0dc1fc1deba2',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const top5Leagues = ["PL", "BL1", "SA", "PD", "FL1"];
        const filteredMatches = response.data.response.filter((match) =>
          top5Leagues.includes(match.league.id)
        );
        setMatches(filteredMatches);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-4">
      {matches.map((match) => (
        <div key={match.fixture.id} className="league border border-secondary">
          <img src={match.league.logo} alt={match.league.name} />
          <span className="leagueName mx-5 text-center">
            {match.league.name}
          </span>
          <div className="row ">
            <div className="col-3" />
            <div className="col-2">
              <img src={match.teams.home.logo} alt={match.teams.home.name} />
              {match.teams.home.name}
            </div>
            <div className="col-2 my-3">{match.fixture.status.elapsed}</div>
            <div className="col-2">
              <img src={match.teams.away.logo} alt={match.teams.away.name} />
              {match.teams.away.name}
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default Games;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [footBall, setFootBall] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://free-football-soccer-videos.p.rapidapi.com/',
//         headers: {
//           'X-RapidAPI-Key': '5d6d088dd2msh955a40af0037247p128fc2jsn0dc1fc1deba2',
//           'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//         setFootBall(response.data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div >
//       {footBall.map((item) => (
//         <div key={item.id} >

//           <h1>{item.title}</h1>
//         </div>
//       ))}
//     </div>
//   );
// }