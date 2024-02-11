import React from "react";
import './footballapi.css'
export default class Header extends React.Component{

    render(){
        return(
            <>
            <header>
  <div className="navbar">
    <div className="logo">
      <h2>Univa </h2>
    </div>
    <ul className="links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Matches</a></li>
      <li><a href="#">leagues</a></li>
      <li><a href="#">Global Cups</a></li>
    </ul>
  </div>
</header>
            </>
        )
    }
}