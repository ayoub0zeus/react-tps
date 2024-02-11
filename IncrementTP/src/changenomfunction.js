import React from "react";
import { useState } from "react";

export default function Nomfunc(props) {
  const [value, setValue] = useState("Ayoub");
  const change = () => {
    setValue("Dahir");
  };
  return (
    <>
      <p>actual nom est {value}</p>
      <button onClick={change}>change</button>
    </>
  );
}
