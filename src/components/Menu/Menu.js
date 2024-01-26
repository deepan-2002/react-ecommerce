import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import './Menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "../CartItems/CartItems";
import SearchBar from "../SearchBar/SearchBar";
import { ShopContext } from "../../Context/ShopContext";

function Menu() {
  const {getTotalCartItem} = useContext(ShopContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            {/* <img src={fashioncart} alt="fashion-cart" width={'150px'} /> */}
            FASHIONCART
          </Navbar.Brand>
          <Button variant="dark" className="ms-auto order-lg-2" onClick={handleShow}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2 order-lg-1" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/men">Men</Nav.Link>
              <Nav.Link href="/women">Women</Nav.Link>
              <Nav.Link href="/kids">Kids</Nav.Link>
            </Nav>
            <SearchBar />
            <Link to="/login">
              <Button variant="dark" className="mt-2 mt-lg-0 me-2">
                Login
              </Button>
            </Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartItems />
          <div className="view-cart p-3 text-bg-dark d-flex align-items-center">
            <a className='btn btn-light me-5 ms-4' href="/cart" onClick={handleClose}>View Cart</a>
            <p>Total Amount:<strong> ₹ {getTotalCartItem()}</strong></p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Menu;