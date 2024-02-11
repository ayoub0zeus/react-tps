import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Contact from "./routerTp/contact";
import About from "./routerTp/about";
import Home from "./routerTp/home";

function App() {
  const  Ul= styled.ul`
  display:flex;
  justify-content: space-around;
  font-size: 26px;
  
  list-style-type: none;
  padding: 10px;
  cursor: pointer;
      li{
        display: inline-block;
       background-color:skyblue;
       border-radius: 12px;
       padding:10px;
        margin:10px;
      }
      li #link{
        text-decoration: none;
        color:black;
      }


  `;
  return (
    <>
          <Ul>
          <li>
              <Link to="/" id="link">Go Home </Link>
            </li>
            <li>
              <Link to="/contact" id="link">Go Contact </Link>
            </li>
            <li>
              <Link to="/about" id="link"> Go About </Link>
            </li>
          </Ul>
           
           

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      
    </>
  );
}

export default App;
