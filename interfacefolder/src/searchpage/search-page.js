import React from "react";
import Nav from "../composent/nav";
import SearchBar from "./searchbar";
import Type from "./type";
import Categories from "./categories";
import Results from "./search-result";

export default class SearchPage extends React.Component {
  render() {
    return (
      <>
        <div className="contenu">
          <Nav />
          <SearchBar />
          <Type />
          <Categories />
          <Results />
        </div>

        
      </>
    );
  }
}
