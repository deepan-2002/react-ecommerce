import { Badge, Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import './Menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import fashioncart from '../../Assets/img/FASHIONCART.png'
import CartItems from "../CartItems/CartItems";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={fashioncart} alt="fashion-cart" width={'150px'} /> */}
          FASHIONCART
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/men">Men</Nav.Link>
            <Nav.Link href="/women">Women</Nav.Link>
            <Nav.Link href="/kid">Kids</Nav.Link>
          </Nav>
          <Form className="d-flex m-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
          <Link to="/login">
            <Button variant="dark" className="mt-2 mt-lg-0 me-2">
              Login
            </Button>
          </Link>
          <Button variant="dark" className="mt-2 mt-lg-0" onClick={handleShow}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Cart Items</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <CartItems />
              <div>
                <Link to={'/cart'}>
                  <button className='view-cart btn btn-dark' onClick={handleClose}>View Cart</button>
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu;