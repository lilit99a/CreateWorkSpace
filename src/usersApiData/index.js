import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersData = () => {
  const [users, getUsers] = useState([]);
  const [pointUser, setPointUser] = useState();
  const url = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios
      .get(`${url}/users`)
      .then((response) => {
        const allUsers = response.data;
        getUsers(allUsers);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useEffect(() => {
    const pointUsers = users?.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      );
    });
    setPointUser(pointUsers);
  }, [users]);

  return <div>{pointUser}</div>;
};

export default UsersData;
