import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import Inc from './increment_chnagecolor';
import Inputs from './inputs';
import Handletwo from './2button';
import Rout from './route';
import Apitest from './apitest';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./about";
import HomeUs from "./home";
import Apibaxios from './apibaxios';
import Inputs2 from './input2';
// import Composent1 from './exam';

function App() {
 
  

  return (
    <>
  <Inputs2 />
    {/* <Composent1 /> */}
    {/* <Apibaxios /> */}
   {/* <Inc /> */}
   {/* <Inputs /> */}
   {/* <Handletwo /> */}
   {/* <Rout />  */}
   {/* <Apitest /> */}
   {/* <div className='route'>
   <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/h">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>

          <Route path="/about" element={<AboutUs />} />
          <Route path="/h" element={<HomeUs />} />
        </Routes>
       </div>
     </Router>
   </div> */}
    </>
  );
}

export default App;
