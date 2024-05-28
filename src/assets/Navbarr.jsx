import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Bussiness from './Bussiness';
import Entertainment from './Entertainment';
import Sport from './Sport';
import Science from './Science';
import Technology from './Technology';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <div className="container">
                <Navbar.Brand href="#home">accidic<span>NEWS</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/Bussiness"}>Bussiness</Nav.Link>
                        <Nav.Link as={Link} to={"/Entertainment"}>Entertaiment</Nav.Link>
                        <Nav.Link as={Link} to={"/Sport"}>Sport</Nav.Link>
                        <Nav.Link as={Link} to={"/Science"}>Science</Nav.Link>
                        <Nav.Link as={Link} to={"/Technology"}>Technology</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
            <h1 className='text-center text-uppercase mt-4 text-success'>wellcome to accidicNews....</h1>
        </div>
  )
}

export default NavBar
