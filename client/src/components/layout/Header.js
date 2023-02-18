
import React from 'react';
import { Container, ListGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Clogo } from '../../images/images';
 
const Header=()=>
{
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
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </Container>
  );
}
 
export default Header;