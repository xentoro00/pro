import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Sidebar from './Sidebar';
export const Client = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:8080/getUsers')
            .then(res => {
                let users = res.data;
                users.forEach(user => {
                    setUsers(users => [...users, user]);
                });
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <main style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />

                <table class="table">
                    <caption>List of users</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Emri</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => (
                                <tr>
                                    <th scope="row">{item.Id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main >
        </div>
    )
}