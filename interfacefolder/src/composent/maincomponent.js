import React from "react";
import "../styles/style.css";
import Nav from "./nav";
import Search from "./search";
import RecommendationSection from "./recommendation";
// import Discover from "./discover";


export default class MainComponent extends React.Component {
  render() {
    return (
      <>

        <div className="contenu">
          <Nav />
          <Search />
        </div>
        {/* <Discover /> */}
        <RecommendationSection />
      </>
    );
  }
}
