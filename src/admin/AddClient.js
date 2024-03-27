import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../SignupValidation';
import axios from 'axios'
import Sidebar from './Sidebar';





function AddClient() {
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

        setErrors(Validation(values));
    }

    useEffect(() => {
        console.log(errors);

        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8080/signup', values)
                .then(res => {
                    navigate('/dashboard');
                })
                .catch(err => console.log(err));
        }
    }, [errors]);


    return (

      <div> 
      <main style={{ display: 'flex', minHeight: '100vh' }}>
  <Sidebar />


  <div className="container-fluid">
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>ADD CLIENT</h2>
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

                        <button type='submit' className='btn btn-success w-100 roundend-0' ><strong> ADD CLIENT </strong></button>


                    </form>
      </div>
    </div>
    </div>

    
  </main>
</div>




    )
}

export default AddClient