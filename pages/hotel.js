import React from 'react';

import Layout from '../components/layout';

import styles from './hotel.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Carousel, ResponsiveEmbed} from "react-bootstrap";

const hotel = () => {
  const hotelUrl = 'https://www.marriott.com/events/start.mi?id=1615404570058&key=GRP';
  const hotelName = 'Sheraton Dallas Hotel by the Galleria';
  const features = [
    'King or Double guest rooms',
    'Room rate: $95/night, must book by July 31',
    'Complimentary WiFi, breakfast, and parking',
    'Outdoor pool',
    'Fitness center',
    'Room service',
    'Red Eye Restaurant and Bar',
    'Close to Galleria shopping and dining',
  ];
  const photoDeets = [
    {alt: 'Hotel exterior', filename: 'exterior'},
    {alt: 'Hotel lobby', filename: 'lobby'},
    {alt: 'Hotel interior', filename: 'interior'},
    {alt: 'Restaurant/bar', filename: 'bar1'},
    {alt: 'Restaurant/bar', filename: 'bar2'},
    {alt: 'Restaurant/bar', filename: 'dining'},
    {alt: 'Guest room', filename: 'room1'},
    {alt: 'Guest room', filename: 'room2'},
    {alt: 'Guest room', filename: 'room3'},
    {alt: 'Guest room', filename: 'room4'},
    {alt: 'Fitness center', filename: 'fitness'},
  ];

  return (
    <Layout>
      <div className={styles.Hotel}>
        <h1 className="display-4">
          Host Hotel
        </h1>

        <div className="d-flex flex-column flex-nowrap">
          <Row className="justify-content-center">
            <Col xs={6} sm={5} md={4} xl={3}>
              <p>
                <a href={hotelUrl} className={styles.Logo}>
                  <img className="img-fluid"
                       src="/images/hotel/logo.png"
                       alt={hotelName + ' Logo'}/>
                </a>
              </p>
            </Col>
          </Row>
          <Row className="order-2 order-md-3">
            <Col xs={12}>
              <p className={styles.Lead + " lead"}>
                The{' '}
                <a href={hotelUrl}>{hotelName}</a>
                {' '}is proud to host the Big D Classic, with special rates for tournament bowlers.
              </p>
            </Col>
            <Col xs={12} sm={7}>
              <ul>
                {features.map((f, i) => {
                  return <li key={i}>{f}</li>
                })}
              </ul>
            </Col>
            <Col xs={12} sm={5}>
              <address>
                <span className="line">4801 Lyndon B. Johnson Freeway</span>
                <span className="line">Dallas, TX 75244</span>
                <span className="line">United States</span>
                <span className="line">Tel:{' '}
                  <a href="tel:972-661-3600">972-661-3600</a>
                </span>
              </address>
              <p className="d-sm-none">
                <a href="https://goo.gl/maps/xmqGYjxRYVR2">
                  Map to Hotel
                </a>
              </p>
            </Col>
            <Col>
              <p className="text-center">
                <Button href={hotelUrl} variant="success">
                  Book Your Room
                </Button>
              </p>
            </Col>
          </Row>
          <Row className="order-3 order-md-2">
            <Col>
              <Carousel fade>
                {photoDeets.map((photo, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <img src={'/images/hotel/' + photo.filename + '.jpeg'}
                           alt={photo.alt}
                           className="d-block w-100"
                      />
                      <Carousel.Caption>
                        <p>{photo.alt}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
          <Row className="order-4 d-none d-sm-block">
            <Col>
              <ResponsiveEmbed aspectRatio="4by3">
                <iframe className="embed-responsive-item"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13395.62514644726!2d-96.82778208228135!3d32.92707411940713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c20d006f3e19d%3A0x7c4b3eebb994d659!2sSheraton+Dallas+Hotel+by+the+Galleria!5e0!3m2!1sen!2sus!4v1549220341404" />
              </ResponsiveEmbed>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default hotel;
