import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'
import './Login.css';
import Header from './Header';
import Navbar from './Navbar';






function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''

    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handeInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:3000/login', values)
                .then(res => {
                    if (res.data === "Succes") {
                        navigate('/');

                    } else {
                        alert("No record existed");

                    }

                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Header />
            <Navbar />
          
            <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="h1">Login</div> <br />
              <div className="form-outline mb-4 d-flex">
              </div>
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} placeholder="Enter a valid email address" />
              </div>
              {/* <!-- Password input --> */}
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
              </div>
              {/* <!-- Birthday --> */}
             
              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Dont Have an account? <a href="/signup" className="link-danger">Log in</a></p>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Register with</p>
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
                <script src="https://apis.google.com/js/platform.js" async defer></script>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
    </div>

    )
}

export default Login