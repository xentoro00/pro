import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios'
import './Login.css';
import Header from './Header';
import Navbar from './Navbar';



function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''

    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const handeInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // Update errors state
        setErrors(Validation(values));
    }

    useEffect(() => {
        // This effect runs after every render where errors state changes
        console.log(errors); // This should reflect the updated errors state

        // Check if there are no errors
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8080/signup', values)
                .then(res => {
                    navigate('/login');
                })
                .catch(err => console.log(err));
        }
    }, [errors]);


    return (


        <div>
            <Header />
            <Navbar />

            <div className='d-flex justify-content-center align-items-center bg-danger vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <h2>Sign-up</h2>

                    <form action="" onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="name"> Name</label>
                            <input type="text" placeholder='Enter name' name='name'
                                onChange={handeInput} className='form-control roundend-0' />
                            {errors.name && <span className='text-danger'> {errors.name}</span>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="email"> Email</label>
                            <input type="email" placeholder='Enter email' name='email'
                                onChange={handeInput} className='form-control roundend-0' />
                            {errors.email && <span className='text-danger'> {errors.email}</span>}

                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Password"> Password</label>
                            <input type="password" placeholder='Password' name='password'
                                onChange={handeInput} className='form-control roundend-0' />
                            {errors.password && <span className='text-danger'> {errors.password}</span>}

                        </div>

                        <button type='submit' className='btn btn-success w-100 roundend-0' ><strong> Sign Up </strong></button>
                        <p> You are agree to your terms and policies</p>
                        <Link to="/login" className='btn btn-default w-100 border w-100 bg-light roundend-0 text-decoration-none'> Login </Link>


                    </form>


                </div>

            </div>
        </div>
    )
}

export default Signup