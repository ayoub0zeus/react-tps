import React from "react";
import './search/style.css'
import Nav from "./search/nav";
import SearchBar from "./search/searchBar";
import Results from "./search/result-search";
import Categories from "./search/categories";
import Type from "./search/type";


export default class Search extends React.Component{

    render(){
        return(
           <>
            <Nav />
            <SearchBar />
            <Type />
            <Categories />
            <Results />
           </>
        )
    }
}