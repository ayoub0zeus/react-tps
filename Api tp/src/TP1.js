import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Tp1Axios() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      console.log(result.data);
      setUsers(result.data);
    });
  }, []);
  return (
    <>
      <h1>nombre d'utilisateurs: {users.length}</h1>
      <ul>
        {users.length > 0 ? (
          users.map((el, index) => {
            return (
              <li key={index}>
                id : {el.id} ,nom : {el.name} ,email : {el.email} ,
              </li>
            );
          })
        ) : (
          <h2>Aucun User</h2>
        )}
      </ul>
    </>
  );
}
