
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import BreadcrumbComp from './layout/BreadcrumbComp';
import { AboutusBnr } from "../images/images";
const Aboutus = () => {
  const pageLink = [{
    title: "Home",
  },
  {
    title: "About Us",
    active: true
  }]
  return (
    <>
      <Container>
        <BreadcrumbComp className="page-breadcrumb" pageProps={pageLink} />
      </Container>
      <Container fluid className='p-0'>   <Image src={AboutusBnr} className="w-100" /></Container>
      <Container className='page-container'>
        <section className='content-section about-page-section'>
          <Row className='mb-4'>
            <Col xs={12} md={12}>
              <h3 className='content-header'>We are the one of the Best in Hyderabad</h3>
              <p className='justify-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col xs={12} md={12}>
              <h3 className='content-header'> Our Philosophy</h3>
              <p className='justify-content'>To work by the client’s requirements and exceed their expectations in terms of quality, cost control, and time management. To consistently deliver eco-friendly world-class finishes in our interior design concepts, execute & complete all projects in such a way. Vyjayanthi Interiors offers excellent residential and Commercial interior design in Hyderabad and we design that complement the dynamic ways the world adapts. We create each design in structure with a proper review of the resident culture and lifestyle. Owning a home is an ambition that every human wants in his lifespan. our expert team converts the spaces into luxurious homes as assigned developers and individual clients.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h3 className='content-header'>Our Mission & Vision</h3>
              <p className='justify-content'>To work by the client’s requirements and exceed their expectations in terms of quality, cost control, and time management. To consistently deliver eco-friendly world-class finishes in our interior design concepts, execute & complete all projects in such a way. Vyjayanthi Interiors offers excellent residential and Commercial interior design in Hyderabad and we design that complement the dynamic ways the world adapts. We create each design in structure with a proper review of the resident culture and lifestyle. Owning a home is an ambition that every human wants in his lifespan. our expert team converts the spaces into luxurious homes as assigned developers and individual clients.</p>
            </Col>
          </Row>
        </section>
        <section className='content-section about-page-section'>

        </section>
      </Container>
    </>
  )
}

export default Aboutus;