import React, { useState } from "react";
export default function Inputs2() {
  const [nom, setNom] = useState("");
  const [marque, setMarque] = useState("");
  const [date, setDate] = useState("");
  const [conducteur,setConducteur] = useState("")
  const [displayed, setDisplayed] = useState(false);
  const changeNom = (even) => {
    setNom(even.target.value);
  };

  const handleSelect = (even) => {
    setMarque(even.target.value);
  };
  const changeDate = (even) => {
    setDate(even.target.value);
  };
  const changeConducteur = (even) => {
    setConducteur(even.target.value);
  };
  const handleButton = () => {
    setDisplayed(true)
   
  };

  return (
    <>
      Nom : <input type="text" name="nom" onChange={changeNom} value={nom} /> <br/>
      Marque :
      <select value={marque} onChange={handleSelect}>
        <option value="">Select a marque</option>
        <option value="toyota">Toyota</option>
      </select><br/>
      selected marque is  {marque}
      <br/>
      date :<input type="date" name="date" value={date}  onChange={changeDate}/><br/>
       conducteur :<input type="text" name="conducteur" value={conducteur} onChange={changeConducteur} /> <br/>
       <button type="submit" onClick={handleButton}> confirmer</button>
 
       <div>
       
            
            {
                displayed == true && (
                
                <ul>
                    <h2>LIST</h2>
                    <li>nom : {nom} </li>
                    <li> marque : {marque}</li>
                    <li>date :{date} </li>
                    <li> conducteur :{conducteur}</li>
                </ul>)
}

       
        

       </div>
        
    </>
  );
}


