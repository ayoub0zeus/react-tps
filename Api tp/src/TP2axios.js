import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Tp2Axios() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ nom: "", prenom: "", email: "" });

  useEffect(() => {
    axios.get('http://192.168.68.53/tpreact/getUsers.php').then((result) => {
      setUsers(result.data);
    });
  }, []);
  return (
    <>
    <h1>Nombre d'utilisateurs: {users.length}</h1>
    <ul>
      {users.length > 0 ? (
        users.map((el, index) => (
          <li key={index}>
            id: {el.id}, nom: {el.name}, email: {el.email},
          </li>
        ))
      ) : (
        <h2>Aucun utilisateur</h2>
      )}
    </ul>

    </>
  );
}
