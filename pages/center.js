import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Carousel, ResponsiveEmbed} from "react-bootstrap";

import Layout from '../components/layout';

import styles from './center.module.scss';

const center = () => {
  const centerUrl = 'http://www.classicbowling.com/';
  const centerName = 'Classic Bowling Center';
  const features = [
    '60 Brunswick lanes',
    'Brunswick pinsetters and ball returns',
    'Online Lane Reservations',
    'Classic Eats Cafe',
    'KO Sports Bar and Lounge',
    'Video arcade',
    'Just Bowling Pro Shop',
    'ATM',
    'Storage lockers',
    'Meeting Room',
  ];

  return (
    <Layout>
      <div className={styles.Center}>
        <h1 className="display-4">
          {centerName}
        </h1>

        <Row>
          <Col xs={12} sm={5}>
            <p className="lead">
              The Golden Gate Classic takes place at{' '}
              <a href={centerUrl}>
                {centerName}
              </a>
              . You can look forward to enjoying all this:
            </p>
            <ul>
              {features.map((f, i) => {
                return (
                  <li key={i}>
                    {f}
                  </li>
                )
              })}
            </ul>
          </Col>
          <Col xs={12} sm={7}>
            <h4 className="d-none d-md-block">
              Getting There
            </h4>

            <ResponsiveEmbed aspectRatio="4by3" className={styles.Map + " d-none d-md-block"}>
              <iframe className="embed-responsive-item"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3158.9179923188367!2d-122.467872!3d37.651132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7bc86aa2437f%3A0x9fe5dab297c66d45!2sClassic+Bowling+Center!5e0!3m2!1sen!2sus!4v1411883901483" />
            </ResponsiveEmbed>

            <address>
              <span className="line">
                <strong>
                  {centerName}
                </strong>
              </span>
              <span className="line">
                900 King Drive
              </span>
              <span className="line">
                Daly City, CA 94015
              </span>
              <span className="line">
                Tel:{' '}
                <a href="tel:650-878-0300">650-878-0300</a>
              </span>
            </address>
            <p className="d-md-none">
              <a href="https://www.google.com/maps/place/Classic+Bowling+Center/@37.651132,-122.467872,17z/data=!3m1!4b1!4m2!3m1!1s0x808f7bc86aa2437f:0x9fe5dab297c66d45">
                View Map
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default center;
