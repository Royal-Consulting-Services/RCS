
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Clogo } from '../../images/images';

const Header = () => {
  return (
    <Container fluid className='header-container'>
      <div className='top-header d-flex'>
        <ListGroup horizontal className='ms-auto'>
          <ListGroup.Item>This</ListGroup.Item>
          <ListGroup.Item>ListGroup</ListGroup.Item>
          <ListGroup.Item>renders</ListGroup.Item>
          <ListGroup.Item>horizontally!</ListGroup.Item>
        </ListGroup>
      </div>
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
            <NavDropdown title="Services" id="basic-nav-dropdown" drop={'down-centered'}
              className='navbar-dropdown navbar-dropdown-custom'>
              <NavDropdown title="Room" id="room-dropdown" drop={'start'}
                className='navbar-dropdown navbar-dropdownsub-custom'>
                <NavDropdown.Item href="#action/3.2">
                  Master Bedroom
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Living Room</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Guest Bedroom
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Kids Room
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Study Room
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Parents Room
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Bedroom
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Kitchen" id="room-dropdown" drop={'start'}
                className='navbar-dropdown navbar-dropdownsub-custom'>
                <NavDropdown.Item href="#action/3.2">
                  U Shaped
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Living Room</NavDropdown.Item>
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
                <NavDropdown.Item href="#action/3.4">
                  Modular Kitchen
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="#action/3.4">
                Pooja Room
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Bed Room
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;