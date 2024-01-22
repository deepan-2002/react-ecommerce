import React from 'react'
import fashionCart from '../../Assets/img/FASHIONCART.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className='text-center bg'>
        <img src={fashionCart} alt='Fashion Cart' className='img-fluid' width={'200px'} />
        <ul className='footer-list mt-4'>
          <a href='/'><li>Company</li></a>
          <a href='/'><li>Products</li></a>
          <a href='/'><li>Offices</li></a>
          <a href='/'><li>About</li></a>
          <a href='/'><li>Contact</li></a>
        </ul>
        <div className='icon-container'>
          <a href='/'><FontAwesomeIcon icon={faPhone} /></a>
          <a href='/'><FontAwesomeIcon icon={faEnvelope} /></a>
          <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
        <hr />
        <div className='copyright'>
          <p>
            Copyright &copy; 2024 - <a href='https://github.com/deepan-2002'>Deeban Yathiraja</a> - All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer