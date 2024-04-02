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
                console.log(fetchedUsers);
                setUsers(fetchedUsers);
                setNumClients(fetchedUsers.length); 
            })
            .catch(err => console.log(err));
    };
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/deleteUsers/${id}`)
            .then(res => {
                getUsers();
            })
            .catch(err => console.log(err));
    };

    const handleEdit = (id) => {
    };

    return (
        <div> 
            <main style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-9 d-flex justify-content-center align-items-center">
                        <table className="table table-hover table-bordered table-striped dataTable no-footer">
    <caption>List of staff</caption>
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Emri</th>
            <th scope="col">Client Number</th>
            <th scope="col">Gender</th>
            <th scope="col">email</th>
            <th scope="col">Created</th>
            <th scope="col">Edit</th> 
        </tr>
    </thead>
    <tbody>
        {Array.isArray(users) && users.map((item, index) => (
            <tr key={item.id}>
                <th scope="row">
                {item.Id}</th> 
                <td>{item.name}</td>
                <td>{item.staff_number}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.created_at}</td>
                <td>
                    <button onClick={() => handleEdit(item.Id)} className="btn btn-primary mr-2">Edit</button>
                    <button onClick={() => handleDelete(item.Id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
