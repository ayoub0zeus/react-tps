import React, { Component } from "react";
import "./App.css";
import Incrementer from "./increment";
import Nom from "./changenom";
// import Nomfunc from "./changenombfunction";

function App() {
  return (
    <>
      <Incrementer/>
      <Nom />
      {/* <Nomfunc/> */}
    </>
  );
}

export default App;


