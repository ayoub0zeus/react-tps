import React, { useState } from 'react';

export default function Composent1  ()  {
  const [carInfo, setCarInfo] = useState({
    matricule: '',
    marque: '',
    dateCirculation: '',
    conducteur: '',
  });

  const [displayInfo, setDisplayInfo] = useState(false);

  const inputs = [
    { label: 'Matricule', name: 'matricule' },
    { label: 'Marque', name: 'marque' },
    { label: 'Date de circulation', name: 'dateCirculation' },
    { label: 'Conducteur', name: 'conducteur' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayInfo(true);
  };

  return (
    <div>
      <h2>Saisir les informations de la voiture</h2>
      <form onSubmit={handleSubmit}>
        {inputs.map((champ) => (
          <div key={champ.name}>
            <label>
              {champ.label}:
              <input
                type="text"
                value={carInfo[champ.name]}
                onChange={handleInputChange}
                name={champ.name}
              />
            </label>
          </div>
        ))}
        <br />
        <button type="submit">confirmer</button>
      </form>

      {displayInfo && (
        <div>
          <h2>Informations de la voiture saisies:</h2>
          {inputs.map((champ) => (
            <p key={champ.name}>
              {champ.label}: {carInfo[champ.name]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

