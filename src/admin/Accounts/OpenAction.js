import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar';
import { useNavigate } from 'react-router-dom';

function OpenAction({ id, onClose }) {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        account: '', 
    });

    const [errors, setErrors] = useState({});
    const [accounts, setAccounts] = useState([]); 

    useEffect(() => {
        axios.post(`http://localhost:8080/getAcc`)
            .then(res => {
                setAccounts(res.data);
            })
            .catch(err => console.log(err));
            

        axios.get(`http://localhost:8080/getUsers/${id}`)
            .then(res => {
                setValues(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.put(`http://localhost:8080/updateUsers/${id}`, values);
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }} aria-modal="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Open Acc</h5>
                        <button type="button" className="close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="col-md-6 form-group">
                                    <label htmlFor="name">Account Name</label>
                                    <select name="account" value={values.account} onChange={handleInput} className="form-control roundend-0">
                                        <option value="">Select Acc name</option>
                                        {accounts.map(account => (
                                            <option key={account.id} value={account.name}>{account.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenAction;
