import React, { useState } from 'react';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [salaire, setSalaire] = useState('');
  const [codeSolidarite, setCodeSolidarite] = useState('');
  const [codeMassare, setCodeMassare] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // Réinitialiser les champs lorsque l'option change
    setNom('');
    setPrenom('');
    setEmail('');
    setSalaire('');
    setCodeSolidarite('');
    setCodeMassare('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuer des actions supplémentaires en fonction de l'option sélectionnée si nécessaire
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="salarie"
              checked={selectedOption === 'salarie'}
              onChange={handleOptionChange}
            />
            Salarie
          </label>
          <label>
            <input
              type="radio"
              value="chomage"
              checked={selectedOption === 'chomage'}
              onChange={handleOptionChange}
            />
            Chomage
          </label>
          <label>
            <input
              type="radio"
              value="etudiant"
              checked={selectedOption === 'etudiant'}
              onChange={handleOptionChange}
            />
            Etudiant
          </label>
        </div>

        {selectedOption === 'salarie' && (
          <div>
            <label>Nom: </label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <label>Prenom: </label>
            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            <label>Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Salaire: </label>
            <input type="text" value={salaire} onChange={(e) => setSalaire(e.target.value)} />
          </div>
        )}

        {selectedOption === 'chomage' && (
          <div>
            <label>Nom: </label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <label>Prenom: </label>
            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            <label>Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Code Solidarite: </label>
            <input type="text" value={codeSolidarite} onChange={(e) => setCodeSolidarite(e.target.value)} />
          </div>
        )}

        {selectedOption === 'etudiant' && (
          <div>
            <label>Code Massare: </label>
            <input type="text" value={codeMassare} onChange={(e) => setCodeMassare(e.target.value)} />
            <label>Nom: </label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            <label>Prenom: </label>
            <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
            <label>Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        )}

        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default App;
