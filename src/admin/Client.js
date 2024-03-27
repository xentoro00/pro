import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

export const Client = () => {
    const [users, setUsers] = useState([]);
    const [numClients, setNumClients] = useState(0); 

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios.post('http://localhost:8080/getUsers')
            .then(res => {
                const fetchedUsers = res.data;
                setUsers(fetchedUsers);
                setNumClients(fetchedUsers.length); 
            })
            .catch(err => console.log(err));
    };

    return (
        <div> 
            <main style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 d-flex justify-content-center align-items-center">
                            <table className="table table-hover table-bordered table-striped dataTable no-footer">
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
                                            <tr key={item.Id}>
                                                <th scope="row">{item.Id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <div>Total Clients: {numClients}</div> 
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}