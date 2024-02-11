import React, { useState } from "react";

function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [afficher, setAfficher] = useState(false);
  const handleButton = (e) => {
    e.preventDefault();
    setAfficher(true);
  };

  const handleNom = (e) => {
    setNom(e.target.value);
  };
  const handlePrenom = (e) => {
    setPrenom(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      <form>
        nom : <input type="text" name="name" value={nom} onChange={handleNom} />{" "}
        <br />
        prenom :
        <input
          type="text"
          name="name"
          value={prenom}
          onChange={handlePrenom}
        />{" "}
        <br />
        email :
        <input
          type="text"
          name="name"
          value={email}
          onChange={handleEmail}
        />{" "}
        <br />
        <textarea value={message} onChange={handleMessage}>
          Message
        </textarea>
        <button type="submit" onClick={handleButton}>
          Envoyer
        </button>
      </form>
      <button
        onClick={(e) => {
          setAfficher(false);
        }}
      >
        Hide
      </button>

      <div>
        {afficher && (
          <>
            <p>nom : {nom}</p>
            <p>prenom : {prenom}</p>
            <p>email : {email}</p>
            <p>message : {message}</p>
          </>
        )}
      </div>
    </>
  );
}

export default Contact;
