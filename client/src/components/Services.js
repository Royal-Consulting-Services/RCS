
import React, { useState } from 'react';
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import BreadcrumbComp from './layout/BreadcrumbComp';
import { AboutusBnr, bedRoomservice, Slide1, bedRoomservice1, Slide3, dyningRoom, livingRoom, poojaRoom, bedRoom, poojaRoomservice, kidsRoomservice } from '../images/images';
import { useNavigate } from "react-router-dom";

const Services = (props) => {
  const navigate = useNavigate();

  const pageLink = [{
    title: "Home",
  },
  {
    title: "Services",
    active: true
  }]
  const seviceSelect = (data)=>{
    navigate('/servicedetail');
    props.serviceClick(data)
    
  }
  
  return (
    <>
      <Container>
        <BreadcrumbComp className="page-breadcrumb" pageProps={pageLink} />
      </Container>
      <Container fluid className='p-0'>   <Image src={AboutusBnr} className="w-100" /></Container>
      <Container className='page-container'>
        <section className='content-section'>
          <h3 className='content-header'>Services</h3>
          <Row className='m-0'>
            {props.content.map(item => (
              <Col xs={12} md={4}>
                <Card className='service-card' onClick={(e)=>seviceSelect(item)}>
                  <Card.Img variant="top" src={item.src} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
            )}
            {/* <Col xs={12} md={4}>
            <Card className='service-card'>
                <Card.Img variant="top" src={bedRoomservice1} />
                <Card.Body>
                  <Card.Title>Bed Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card className='service-card'>
                <Card.Img variant="top" src={poojaRoomservice} />
                <Card.Body>
                  <Card.Title>Bed Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card className='service-card'>
                <Card.Img variant="top" src={kidsRoomservice} />
                <Card.Body>
                  <Card.Title>Kids Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </section>
      </Container>
    </>
  )
}

export default Services;