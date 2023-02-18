
import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Aboutus, Aboutusport, Slide1, Slide2, Slide3 } from '../images/images';

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Slide1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Slide2}
            alt="Second slide"
          />
          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slide3}
            alt="Third slide"
          />
          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Container>
        <section className='content-section about-section'>
          <Row>
            <Col xs={12} md={4}>
              <div>
                <img
                  className="d-block w-100"
                  src={Aboutusport}
                  alt="Third slide"
                />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <h3 className='content-header'>About Us</h3>
              <p className='justify-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </section>
        <section className='content-section'>
          <h3 className='content-header'>Services</h3>
          <Row>
            <Col xs={12} md={4}>
              <Card >
                <Card.Img variant="top" src={Slide1} />
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
              <Card >
                <Card.Img variant="top" src={Slide1} />
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
              <Card >
                <Card.Img variant="top" src={Slide1} />
                <Card.Body>
                  <Card.Title>Bed Room</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className='content-section test-section'>
          <h3 className='content-header'>Customer voice</h3>
          <Carousel>
        <Carousel.Item interval={1000}>
        <Row>
            <Col xs={12} md={4}>
              <div>
                <img
                  className="d-block w-100"
                  src={Aboutusport}
                  alt="Third slide"
                />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <h3 className='content-header'>About Us</h3>
              <p className='justify-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <Row>
            <Col xs={12} md={4}>
              <div>
                <img
                  className="d-block w-100"
                  src={Aboutusport}
                  alt="Third slide"
                />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <h3 className='content-header'>About Us</h3>
              <p className='justify-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
        <Row>
            <Col xs={12} md={4}>
              <div>
                <img
                  className="d-block w-100"
                  src={Aboutusport}
                  alt="Third slide"
                />
              </div>
            </Col>
            <Col xs={12} md={8}>
              <h3 className='content-header'>About Us</h3>
              <p className='justify-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
        </section>
      </Container>
    </>
  );
}

export default Home;