import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios'



function Signup() {
    const [values, setValues] = useState({
        name: '',
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
        if(errors.name === "" && errors.email === "" && errors.password === "" ){
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');

            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-up</h2>

            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"> Name</label>
                    <input type="text" placeholder='Enter name' name='name'
                        onChange={handeInput}  className='form-control roundend-0'/>
                        {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"> Email</label>
                    <input type="email" placeholder='Enter email' name='email'
                    onChange={handeInput}  className='form-control roundend-0'/>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}

                </div>
                <div className='mb-3'>
                    <label htmlFor="Password"> Password</label>
                    <input type="password" placeholder='Password' name='password'
                  onChange={handeInput}  className='form-control roundend-0'/>
                  {errors.password && <span className='text-danger'> {errors.password}</span>}

                </div>
                
                <button type='submit' className='btn btn-success w-100 roundend-0' ><strong> Sign Up </strong></button>
                <p> You are agree to your terms and policies</p>
                <Link to="/login" className='btn btn-default w-100 border w-100 bg-light roundend-0 text-decoration-none'> Login </Link>


            </form>

            
        </div>


    </div>
  )
}

export default Signup