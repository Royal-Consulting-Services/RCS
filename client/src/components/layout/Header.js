
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Container, ListGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Clogo } from '../../images/images';

const Header = () => {
  return (
    <Container fluid className='header-container'>
      {/* <div className='top-header d-flex'>
        <ListGroup horizontal className='ms-auto'>
          <ListGroup.Item>This</ListGroup.Item>
          <ListGroup.Item>ListGroup</ListGroup.Item>
          <ListGroup.Item>renders</ListGroup.Item>
          <ListGroup.Item>horizontally!</ListGroup.Item>
        </ListGroup>
      </div> */}
      <Navbar className='main-navbar' bg="light" expand="lg" >
        <Navbar.Brand href="#home">
          <img
            className="d-block complogo"
            src={Clogo}
            alt="comp-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown" align="end"
              className='navbar-dropdown navbar-dropdown-custom'>
              <Row>
                <Col xs={4} md={4}>
                  <NavDropdown.Item href="#action/3.4" className='navitem-title'>
                    Room
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Master Bedroom
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Living Room</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Guest Bedroom
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/kidsroom">
                    Kids Room
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/studyroom">
                    Study Room
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Parents Room
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/bedroom">
                    Bedroom
                  </NavDropdown.Item></Col>
                <Col xs={4} md={4}>
                  <NavDropdown.Item href="#action/3.4" className='navitem-title'>
                    Kitchen
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/services/ukitchenroom">
                    U Shaped
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    L Shaped
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Parallel Kitchen
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Island Kitchen
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Straight Kitchen
                  </NavDropdown.Item>
                </Col>
                <Col xs={4} md={4}>
                  <NavDropdown.Item href="#action/3.4" className='navitem-title'>
                    Living
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Living Room
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Dining Room
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Foyer Area
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Sliding Door
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Swing Door
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                  Walk In Wardrobe
                  </NavDropdown.Item>
                </Col>
              </Row>
            </NavDropdown>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </Container >
  );
}

export default Header;