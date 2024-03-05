import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import LoginForm from '../../Forms/LoginForm';
import SignUpForm from '../../Forms/SignUpForm';

const ModalComponent = (props) => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin(!showLogin);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='d-flex justify-content-between' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {showLogin ? "Login" : "SignUp"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {showLogin ? <LoginForm /> : <SignUpForm />}
            </Modal.Body>
            <Modal.Footer className='justify-content-start bg-dark'>
                <Button variant='light' onClick={toggleForm}>
                    {showLogin ? 'New to FashionCartt?' : 'Already have an account?'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;