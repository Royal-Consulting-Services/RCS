


import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import BreadcrumbComp from './layout/BreadcrumbComp';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { AboutusBnr, PorfolioBnr, Slide1, poojaRoom1, poojaRoom2, poojaRoom3, bedRoom1, bedRoom2, poojaRoom } from "../images/images";
const Portfolio = () => {
  const[photoIndex,setPhotoIndex] = useState(0);
  const[isOpen,setIsOpen] = useState(false);
  const pageLink = [{
    title: "Home",
  },
  {
    title: "Portfolio",
    active: true
  }]
  const images = [
    poojaRoom1,
    poojaRoom2,
    poojaRoom3,
    poojaRoom,
  ];
  return (
    <>
      <Container>
        <BreadcrumbComp className="page-breadcrumb" pageProps={pageLink} />
      </Container>
      <Container fluid className='p-0'>   <Image src={PorfolioBnr} className="w-100" /></Container>
      <Container className='page-container'>
      <section className='content-section'>
          <h3 className='content-header'>Portfolio</h3>
          <Row>
            <Col xs={12} md={3} className="p-0">
              <Card className="portfolio-card" key={1} onClick={() =>  setIsOpen(true)}>
                <Card.Img variant="top" src={poojaRoom1} />
                <Card.Body>
                  <div className='body-cont'>
                  <Card.Title>Pooja Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} className="p-0">
              <Card className="portfolio-card" key={2} onClick={() =>  setIsOpen(true)}>
                <Card.Img variant="top" src={poojaRoom2} />
                <Card.Body>
                <div className='body-cont'>
                  <Card.Title>Pooja Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} className="p-0" >
              <Card className="portfolio-card" key={5} onClick={() =>  setIsOpen(true)}>
                <Card.Img variant="top" src={poojaRoom3} />
                <Card.Body>
                <div className='body-cont'>
                  <Card.Title>Pooja Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} className="p-0">
              <Card className="portfolio-card" key={3} onClick={() =>  setIsOpen(true)}>
                <Card.Img variant="top" src={bedRoom1} />
                <Card.Body>
                <div className='body-cont'>
                  <Card.Title>Bed Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3} className="p-0">
              <Card className="portfolio-card" key={4} onClick={() =>  setIsOpen(true)}>
                <Card.Img variant="top" src={bedRoom2} />
                <Card.Body>
                <div className='body-cont'>
                  <Card.Title>Bed Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() =>  setIsOpen(true)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
        </section>
      </Container>
      <div>

      </div>
    </>
  )
}

export default Portfolio;