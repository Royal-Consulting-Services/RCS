
import React, { useState } from 'react';
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import BreadcrumbComp from './layout/BreadcrumbComp';
import { AboutusBnr, bedRoomservice, Slide1, bedRoomservice1, Slide3, dyningRoom, livingRoom, poojaRoom, bedRoom, poojaRoomservice, kidsRoomservice } from '../images/images';
import { useNavigate } from "react-router-dom";
import Portfolio from './Portfolio';

const ServicesDetail = (props) => {
  const navigate = useNavigate();
  

  const pageLink = [{
    title: "Home",
  },
  {
    title: "Services",
    active: true
  }]
  const seviceSelect = () => {
    navigate('/servicedetail')
  }

const {serviceSelected} = props;
  return (
    <>
      <Container>
        <BreadcrumbComp className="page-breadcrumb" pageProps={pageLink} />
      </Container>
      <Container fluid className='p-0'>   <Image src={AboutusBnr} className="w-100" /></Container>
      <Container className='page-container'>
        <section className='content-section'>
          <h3 className='content-header'>{serviceSelected.title}</h3>
          <Row className='mb-4'>
            <Col xs={4} md={4}>
              <p className='justify-content'>{serviceSelected.content}</p>
            </Col>
            <Col xs={8} md={8} style={{ background:"#ead40954"}}>
            <Image src={serviceSelected.src} style={{height:"400px",width:"auto",margin:"10px auto",display:"block"}}/>
            </Col>
          </Row>
        </section>
      </Container>
      <Portfolio />
    </>
  )
}

export default ServicesDetail;