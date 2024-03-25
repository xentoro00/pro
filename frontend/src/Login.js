import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'






function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''

    })
    const navigate = useNavigate();
    const[errors, setErrors] = useState({})
    const handeInput = (event) =>
    {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === "" ){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Succes"){
                    navigate('/home');

                } else {
                    alert("No record existed");

                }

            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-in</h2>

            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"> Email</label>
                    <input type="email" placeholder='Email Address' name='email'
                   onChange={handeInput} className='form-control roundend-0'/>
                   {errors.email && <span className='text-danger'> {errors.email}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor="Password"> Password</label>
                    <input type="password" placeholder='Password' name='password'
                   onChange={handeInput} className='form-control roundend-0'/>
                   {errors.password && <span className='text-danger'> {errors.password}</span>}
                   <br/>
                </div>
                
                <button type='submit' className='btn btn-success w-100 roundend-0' ><strong> Log in </strong></button>
                <p> You are agree to your terms and policies</p>
                <Link to="/signup" className='btn btn-default w-100 border w-100 bg-light roundend-0 text-decoration-none'> Create Account </Link>


            </form>

            
        </div>


    </div>
  )
}

export default Login