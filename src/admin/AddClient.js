import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../SignupValidation';
import axios from 'axios'
import Sidebar from './Sidebar';





function AddClient
() {
    const [values, setValues] = useState({
        name: '',
        staff_number: '',
        gender:'',
        phonenumber:'',
        email: '',
        password: ''

    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    const handeInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(Validation(values));
    }

    useEffect(() => {
        console.log(errors);

        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8080/Userslogin', values)
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


  <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-purple">
                                <div className="card-header">
                                    <h3 className="card-title">Fill All Fields</h3>
                                </div>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="name">Client Name</label>
                                                <input type="text" placeholder='Enter name' name='name' onChange={handeInput} className='form-control roundend-0' /> {errors.name && <span className='text-danger'> {errors.name}</span>}
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="name">Client Number</label>
                                                <input type="text" placeholder='Enter name' name='staff_number' onChange={handeInput} className='form-control roundend-0' /> {errors.name && <span className='text-danger'> {errors.name}</span>}
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="name">Staff Phone Number</label>
                                                <input type="text" placeholder='Enter staff number' name='staff_number' onChange={handeInput} className='form-control roundend-0' />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="gender">Client Gender</label>
                                          <select name="gender" onChange={handeInput} value={values.gender} className="form-control rounded-0">
                                           <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                             <option value="Female">Female</option>
                                                    </select>
                                             {errors.gender && <span className="text-danger">{errors.gender}</span>}
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="name">Client Email</label>
                                                <input type="email" placeholder='Enter name' name='email' onChange={handeInput} className='form-control roundend-0' /> {errors.name && <span className='text-danger'> {errors.name}</span>}
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="name">Client Password</label>
                                                <input type="password" placeholder='Enter name' name='password' onChange={handeInput} className='form-control roundend-0' /> {errors.name && <span className='text-danger'> {errors.name}</span>}
                                            </div>
                                        </div>
                                    </div> <center>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-success ">Add Client</button>
                                    </div></center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>

            </main>
        </div>


    )
}

export default AddClient