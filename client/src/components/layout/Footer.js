
import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Clogo } from '../../images/images';

const Footer = () => {
  const url = window.location.pathname;
  const socialCLick = (urlpath) => {
    if (urlpath !== 'mail') {
      window.open(urlpath, '_blank');
    } else if (urlpath === 'mail') {
      // window.location = 'mailto:admin@brgrouptech.co';
      console.log("urlpath")
    }
  };
  const fbUrl = 'https://www.facebook.com/';
  const watsAppUrl = 'https://web.whatsapp.com/';
  const linkedinUrl = 'https://www.linkedin.com/';
  const instagramUrl = 'https://www.instagram.com/';
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='mainfooter'>
      <div className='f-overlay'>
        <Container className='footer-continer'>
          <Row>
            <Col xs={12} md={6}>
              <div className='footer-logo'> <img
                className="d-block complogo"
                src={Clogo}
                alt="comp-logo"
              /></div>
            </Col>
            <Col xs={12} md={6}>
              <div className='social-icon d-flex'>
                <ListGroup horizontal className='ms-auto'>
                  <ListGroup.Item>
                    <Button variant='link' onClick={() => socialCLick(fbUrl)}>
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className='Edit-icon'
                      />
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      variant='link'
                      onClick={() => socialCLick(watsAppUrl)}
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className='Edit-icon'
                      />
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      variant='link'
                      onClick={() => socialCLick(linkedinUrl)}
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className='Edit-icon'
                      />
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      variant='link'
                      onClick={() => socialCLick(instagramUrl)}
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className='Edit-icon'
                      />
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      variant='link'
                      onClick={() => socialCLick('mail')}
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className='Edit-icon'
                      />
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
          </Row>
          <hr className='hr-light' />
          <Row>
            <Col xs={12} md={9}>
              <Row>
                <Col xs={12} md={8}>
                  <h5>Selection & Installation</h5>
                  <p className='footer-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
                <Col xs={12} md={4}>
                  <h5>Quick Links</h5>
                  <ListGroup className='footer-links'>
                    <ListGroup.Item><a href="#">Home</a></ListGroup.Item>
                    <ListGroup.Item> <a href="#">About Us</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Study Room</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Services</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Contact</a></ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Row>
                    <Col xs={12} md={12}>
                      <h5>Services</h5>
                      <ListGroup className='footer-links product-link'>
                        <ListGroup.Item> <a href="#">Master Bedroom</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Living Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Guest Bedroom</a></ListGroup.Item>
                        <ListGroup.Item> <a href="#">Kids Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Study Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Parents Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Bedroom</a></ListGroup.Item>
                        <ListGroup.Item> <a href="#">U Shaped</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">L Shaped</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Parallel Kitchen</a></ListGroup.Item>
                        <ListGroup.Item> <a href="#">Island Kitchen</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Straight Kitchen</a></ListGroup.Item>
                        <ListGroup.Item> <a href="#">Living Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Dining Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Foyer Area</a></ListGroup.Item>
                        <ListGroup.Item> <a href="#">Sliding Door</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Swing Door</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Walk In Wardrobe</a></ListGroup.Item>
                      </ListGroup>
                    </Col>
                    {/* <Col xs={12} md={4}>
                      <h5>Kitchen</h5>
                      <ListGroup className='footer-links'>
                        <ListGroup.Item> <a href="#">U Shaped</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">L Shaped</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Parallel Kitchen</a></ListGroup.Item>
                        <ListGroup.Item> <a href="#">Island Kitchen</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Straight Kitchen</a></ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col xs={12} md={4}>
                      <h5>Living</h5>
                      <ListGroup className='footer-links'>
                        <ListGroup.Item> <a href="#">Living Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Dining Room</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Foyer Area</a></ListGroup.Item>
                        <ListGroup.Item> <a href="#">Sliding Door</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Swing Door</a></ListGroup.Item>
                        <ListGroup.Item><a href="#">Walk In Wardrobe</a></ListGroup.Item>
                      </ListGroup>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={3}>
              <h5>Get in touch</h5>
              <div className='d-flex footer-address'>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className='contact-icon'
                />
                <address>
                  #6213,<br />
                  Road No.4,<br />
                  BHEL Metro Enclave,<br />
                  Petelguda.
                </address>
              </div>
              <div className='d-flex footer-mobile'>
                <FontAwesomeIcon
                  icon={faMobile}
                  className='contact-icon'
                />
                <p> +1 945-536-9778</p>
              </div>
              <div className='d-flex footer-mobile'>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='contact-icon'
                />
                <p> +1 945-536-9778</p>
              </div>
              <div className='d-flex footer-mobile'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='contact-icon'
                />
                <p> support@royalinteriors.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='sub-footer'>
        <p>&copy; Copyright {year} royalinteriors.am</p>
      </div>
    </div>
  );
}

export default Footer;