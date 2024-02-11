import React from "react";
import { useState } from "react";

export default function Test2(props) {
  const [value, setValue] = useState("AyoubFunction");
  const change = () => {
    setValue("Dahirfunction");
  };
  return (
    <>
      <p>actual nom est {value}</p>
      <button onClick={change}>change</button>
    </>
  );
}
