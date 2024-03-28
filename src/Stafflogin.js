import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/Stafflogin', values)
            .then(res => {
                if (res.data === "Succes") {
                    navigate('/dashboard');
                } else {
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <div className='admin-login-container d-flex justify-content-center align-items-center bg-danger vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <h2>STAFF LOGIN</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"> Email</label>
                            <input type="email" placeholder='Email Address' name='email' onChange={handleInput} className='form-control roundend-0' />
                            <span className='text-danger'> </span>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Password"> Password</label>
                            <input type="password" placeholder='Password' name='password' onChange={handleInput} className='form-control roundend-0' />
                            <span className='text-danger'></span>
                            <br />
                        </div>
                        <button type='submit' className='btn btn-success w-100'><strong> Log in </strong></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
