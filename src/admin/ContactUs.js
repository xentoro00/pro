import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Make sure the file path is correct

export default function ContactUs() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/')
            .then(res => {
                if (Array.isArray(res.data)) {
                    setData(res.data);
                } else {
                    console.error("Data received from server is not an array:", res.data);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (item) => {
        // Handle edit action for the item
        console.log('Edit item:', item);
    };

    const handleDelete = (item) => {
        // Handle delete action for the item
        console.log('Delete item:', item);
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            {/* Place the Sidebar component here */}
            <Sidebar />

            {/* Your ContactUs component content without blue background */}
            <div className='w-50 bg-white rounded p-3'>
                <header>
                  <h1>ContactUs</h1>
                  </header>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.ID}</td>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>
                                    <button onClick={() => handleEdit(item.ID)} className="btn btn-primary mr-2">Edit</button>
                                    <button onClick={() => handleDelete(item.ID)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

