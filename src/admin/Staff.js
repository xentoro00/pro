import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';


export const Staff = () => {
    const [staff, setStaff] = useState([]);
    const [numStaff, setNumStaff] = useState(0); 

    useEffect(() => {
        getStaff();
    }, []);

    const navigate = useNavigate();



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

    const redirectToEditPage = (itemId) => {
        const editUrl = `/EditStaff/${itemId}`;
        window.location.href = editUrl;
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
            <th scope="col">Staff Number</th>
            <th scope="col">Gender</th>
            <th scope="col">email</th>
            <th scope="col">Created</th>
            <th scope="col">Edit</th> 
        </tr>
    </thead>
    <tbody>
        {Array.isArray(staff) && staff.map((item, index) => (
            <tr key={item.id}>
                <th scope="row">
                {item.Id}</th> 
                <td>{item.name}</td>
                <td>{item.staff_number}</td>
                <td>{item.gender}</td>
                <td>{item.email}</td>
                <td>{item.created_at}</td>
                <td>
                <button onClick={() => redirectToEditPage(item.id)} className="btn btn-primary mr-2">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="btn btn-danger">Delete</button>
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
