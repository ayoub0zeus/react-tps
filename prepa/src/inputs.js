import React, { useState } from "react";
export default function Inputs() {
  const [nom, setNom] = useState("");
  const [gender, setGender] = useState("");
  const changeNom = (even) => {
    setNom(even.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  return (
    <>
      Nom : <input type="text" name="nom" onChange={changeNom}  value={nom}/>
      <p> hello {nom}</p>
      <select value={gender} onChange={handleGender}>
        <option value="">Select your gender </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <p>you are {gender} </p>
      <p>
        Hello
        {gender == "Male"
          ? ` Mr ${nom}`
          : gender == "Female"
          ? ` Mme ${nom}`
          : null}

         
      </p>
    </>
  );
}
