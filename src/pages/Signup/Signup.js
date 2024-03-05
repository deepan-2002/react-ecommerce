import React, { useState } from 'react'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form } from 'react-bootstrap'
import { faFacebook, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [signUp, setSignUp] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSignUp({ ...signUp, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('https://65210a08a4199548356cbe00.mockapi.io/userinfo', signUp)
      console.log(response);
    }
    catch (e) {
      console.error(e, 'Something went error');
    }

    setSignUp({
      id: '',
      name: '',
      email: '',
      password: ''
    })
  }

  return (
    <>
      <div className='container bg-light my-5 rounded p-2 login-container'>
        <div className='row'>
          <div className='col-12 col-md-8 p-4 py-5 text-center order-md-2'>
            <h2>Create Account</h2>
            <p>Create Using Social Networks</p>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faGoogle} />
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <hr />
            <Form className='m-auto' onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Control type="text" placeholder="Name" name='name' onChange={handleInputChange} value={signUp.name} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Email" name='email' onChange={handleInputChange} value={signUp.email} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleInputChange} value={signUp.password} />
              </Form.Group>

              <Button variant="dark" type="submit" className='w-100'>
                Sign Up
              </Button>
            </Form>
          </div>
          <div className='signup-col col-12 col-md-4 p-3 py-5 d-flex align-items-center justify-content-center text-bg-dark bg-gradient text-center rounded order-md-1'>
            <div>
              <h2>
                Already Have an Account?
              </h2>
              <p>
                Login To your Account
              </p>
              <Link to={'/login'} className='btn btn-outline-light'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup