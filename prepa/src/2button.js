import React, { useState } from "react";

export default function Handletwo() {
  const radio = ["homme", "femme", "autre"];
  const [valure, setValure] = useState("");
  const changeRadio = (e) => {
    setValure(e.target.value);
  };

  const flex = { display: "flex", justifyContent: "space-around" };
  return (
    <>
      <div style={flex}>
        {radio.map((el, index) => (
          <div key={index}>
            <input
              type="radio"
              name="sexe"
              value={el}
              onChange={changeRadio}
              checked={el === valure}
            />
            {el}
          </div>
        ))}
      </div>
      {/* <div>
        {valure == "homme" && (
          <div>
            {" "}
            <br />
            code remmed : <input type="text" /> <br />
            code cnss : <input type="text" /> <br />
            code massar : <input type="text" /> <br />
            ylh sir 9wd : <input type="text" />
          </div>
        )}
        {valure == "femme" && (
          <div>
            <br />
            bonjour annissa momkin ra9m l wstsp
            <br />
            ra9m lwtsp : <input type="text" /> <br />
            7issab l insta : <input type="text" /> <br />
            7issab d facebook : <input type="text" />
            <br />
            7issab gmail : <input type="text" />
          </div>
        )}

        {valure == "autre" && <div>sir 9wd</div>}
      </div> */}
      
      
      {valure === "homme" ? (
      <div>
        code remmed : <input type="text" /> <br/>
        code cnss : <input type="text" /> <br/>
        code massar : <input type="text" /> <br/>
        ylh sir 9wd : <input type="text" />
      </div>
    ) : valure === "femme" ? (
      <div>
        <br />
        bonjour annissa momkin ra9m l wstsp
        <br />
        ra9m lwtsp : <input type="text" /> <br/>
        7issab l insta : <input type="text" /> <br/>
        7issab d facebook : <input type="text" /><br/>
        7issab gmail : <input type="text" />
      </div>
    ) : valure === "autre" ?<p>9wd</p> : null
  }
  
    </>
  );
}
