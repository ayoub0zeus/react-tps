// app.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./about";
import HomeUs from "./home";

export default function Rout() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<HomeUs />} />
        </Routes>
       </div>
     </Router>
  );
}





// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutUs from './about';  
// import HomeUs from './home';    

// function Rout() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/home" element={<HomeUs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default Rout;

