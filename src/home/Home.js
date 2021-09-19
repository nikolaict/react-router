import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {

  const [users, setUser] = useState([]);

  const getUser = useCallback(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUser(res.data);
    })
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser])

  return (
    <div className="container">
      <div className="row m-4">
        <h1 className="mb-4">Users list</h1>
        <div className="list-group">
          {users.map(user => (
            <Link key={user.id} to={`/user/${user.id}`} className="list-group-item list-group-item-action">{user.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
