import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

export const Staff = () => {
    const [staff, setStaff] = useState([]);
    const [numStaff, setNumStaff] = useState(0); 

    useEffect(() => {
        getStaff();
    }, []);

    const getStaff = () => {
        axios.post('http://localhost:8080/getStaff')
            .then(res => {
                const fetchedStaff = res.data;
                setStaff(fetchedStaff);
                setNumStaff(fetchedStaff.length); 
            })
            .catch(err => console.log(err));

    };


    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/deleteStaff/${id}`)
            .then(res => {
                getStaff();
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
                                <caption>List of users</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Emri</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Edit</th> 
                                    </tr>
                                </thead>
                                <tbody>
    {Array.isArray(staff) && staff.map((item, index) => (
        <tr key={item.Id}>
            <th scope="row">{item.Id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <button onClick={() => handleEdit(item.Id)} className="btn btn-primary mr-2">Edit</button>
                <button onClick={() => handleDelete(item.Id)} className="btn btn-danger">Delete</button>
            </td>
        </tr>
    ))}
</tbody>
                            </table>
                            <div>Total Staff: {numStaff}</div> 
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
