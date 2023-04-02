
import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import BreadcrumbComp from './layout/BreadcrumbComp';
import { AboutusBnr, PorfolioBnr, Slide1, poojaRoom1, poojaRoom2, poojaRoom3, bedRoom1, bedRoom2 } from "../images/images";
const Portfolio = () => {
  const pageLink = [{
    title: "Home",
  },
  {
    title: "Portfolio",
    active: true
  }]
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
              <Card className="portfolio-card">
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
              <Card className="portfolio-card">
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
            <Col xs={12} md={3} className="p-0">
              <Card className="portfolio-card">
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
              <Card className="portfolio-card">
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
              <Card className="portfolio-card">
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
        </section>
      </Container>
    </>
  )
}

export default Portfolio;