
import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import BreadcrumbComp from './layout/BreadcrumbComp';
import Lightbox from "react-image-lightbox";
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

import "react-image-lightbox/style.css";
import { AboutusBnr, PorfolioBnr, Slide1, poojaRoom1, poojaRoom2, poojaRoom3, bedRoom1, bedRoom2, poojaRoom } from "../images/images";
const Portfolio = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
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
      {/* <Container>
        <BreadcrumbComp className="page-breadcrumb" pageProps={pageLink} />
      </Container> */}
      {/* <Container fluid className='p-0'>   <Image src={PorfolioBnr} className="w-100" /></Container> */}
      <Container className='page-container'>
        <section className='content-section'>
          <h3 className='content-header'>Portfolio</h3>
          <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto portfolio-grid">
            <img className="w-full rounded" src={poojaRoom2} />
            <img className="w-full rounded" src={poojaRoom2} />
            <img className="w-full rounded" src={poojaRoom3} />
          </SlideshowLightbox>
        </section>
      </Container>
      <div>

      </div>
    </>
  )
}

export default Portfolio;