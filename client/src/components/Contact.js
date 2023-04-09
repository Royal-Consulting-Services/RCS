
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import BreadcrumbComp from './layout/BreadcrumbComp';
import { ContactBnr } from '../images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const pageLink = [{
    title: "Home",
  },
  {
    title: "contact",
    active: true
  }]
  return (<><Container>
    <BreadcrumbComp className="page-breadcrumb" pageProps={pageLink} />
  </Container><Container fluid className='p-0'>   <Image src={ContactBnr} className="w-100" /></Container>
    <Container className='page-container'>
      <section className='content-section'>
        <h3 className='content-header'>Contact Us</h3>
        <Row className='m-0'>
          <Col xs={12} md={6}>
            <h4> Phone Number</h4>
            <p><FontAwesomeIcon icon= {faPhone} /> 9893215609</p>
          </Col>
          <Col xs={12} md={6}>
            <h4>Email</h4>
            <p><FontAwesomeIcon icon= {faEnvelope} /> support@rcs.com</p>
          </Col>
          <Col xs={12} md={12}>
            <h4> Address</h4>

          </Col>
          <Col xs={12} md={12}>
          <p><FontAwesomeIcon icon= {faMapLocation} />  
            <span> 8a,Alagaradi 5th street,</span>
            <span> Karimedu,</span>
            <span> Madurai - 625016</span>
            </p>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="100%"
              height="450"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </Col>
        </Row>
      </section>
    </Container></>)
}

export default Contact;