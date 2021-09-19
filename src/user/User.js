import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Users() {

    const [users, setUser] = useState([]);

    let { id } = useParams();
    let id = parseInt({ id } = useParams());
    let userP = users.map(user => user.id).indexOf(id);
    let user = (users[userP]);
    console.log(user);

    useEffect(() => {
        const getUser = () => {
            axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
                setUser(res.data);
            })
        };
        getUser();
    }, [])


    if (!user) {
        return null;
    }

    return (
        <div className="container">
            <h1 className="mt-4 mb-4">User</h1>
            <div className="table-responsive">
                <table className="table mb-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Full name</th>
                            <th scope="col">Username</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Webiste</th>
                            <th scope="col">Address(Street)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.address.street}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link type="button" to="/" className="btn btn-primary">Back to Home</Link>
        </div>
    )
}

export default Users;