import { faFacebook, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css'

const Login = () => {
  return (
    <>
      <div className='container bg-light my-5 rounded p-2 login-container'>
        <div className='row'>
          <div className='col-12 col-md-8 p-4 py-5 text-center'>
            <h2>Login To Your Account</h2>
            <p>Login Using Social Networks</p>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faGoogle} />
              <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <hr />
            <Form className='m-auto'>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="dark" type="submit" className='w-100'>
                Login
              </Button>
              <div className='text-end mt-2 forgot-password'>
                <a href='/login'>forgot password?</a>
              </div>
            </Form>
          </div>
          <div className='signup-col col-12 col-md-4 p-3 py-5 d-flex align-items-center justify-content-center text-bg-dark bg-gradient text-center rounded'>
            <div>
              <h2>
                New Here?
              </h2>
              <p>
                Sign up and Discover a great amount of new products.
              </p>
              <Button variant='light'>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>    </>
  )
}

export default Login