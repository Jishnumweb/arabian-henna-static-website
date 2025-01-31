import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
         <Navbar expand="lg" className="header-part-view p-1 sticky-header">
  <Container>
    <h4 className='header-logo'><a href="home">ARABIAN HENNA</a></h4>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='togglenav'/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <ul className='header-links'>
            <li className='navlinks'><a href="#products">SUPPLIES</a></li>
            <li className='navlinks'><a href="services">SERVICES</a></li>
            <li className='navlinks'><a href="#work">WORKS</a></li>
            <li className='navlinks'><a href="#reviews">REVIEWS</a></li>
            <li className='navlinks'><a href="#contact">CONTACT</a></li>
        </ul>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
    </div>
  )
}

export default Header
