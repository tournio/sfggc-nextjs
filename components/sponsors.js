import React from 'react';

import styles from './sponsors.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const sponsors = ({home}) => {
  const sponsorDetails = [
    {
      alt: 'Storm Bowling Products',
      href: 'http://www.stormbowling.com/',
      title: 'Storm Bowling Products',
      src: 'storm_logo.jpg',
    },
    {
      alt: 'The International Gay Bowling Organization',
      href: 'http://www.igbo.org/',
      title: 'The International Gay Bowling Organization',
      src: 'igbo.jpg',
    },
    {
      alt: 'The United States Bowling Congress',
      href: 'http://www.bowl.com/',
      title: 'The United States Bowling Congress',
      src: 'usbc.jpg',
    },
    {
      alt: "Bud Light, by Matagrano",
      href: 'http://www.budlight.com/',
      title: "Bud Light, by Matagrano",
      src: 'budlight.gif',
    },
  ];

  let sponsorText = '';
  if (home) {
    sponsorText = (
      <Row className={styles.Home}>
        <Col className="d-flex justify-content-between align-items-center">
          {sponsorDetails.map((s, i) => {
            return (
              <a key={i}
                 alt={s.alt}
                 href={s.href}
                 title={s.title}>
                <img className="img-fluid"
                     src={"/images/sponsors/" + s.src} />
              </a>
            );
          })}
        </Col>
      </Row>
    );
  } else {
    sponsorText = (
      <div className={styles.Sponsors}>
        <Row className="d-lg-none my-2">
          <Col className="d-flex justify-content-between">
            {sponsorDetails.map((s, i) => {
              return (
                <a key={i}
                   alt={s.alt}
                   href={s.href}
                   title={s.title}>
                  <img className="img-fluid"
                       src={"/images/sponsors/" + s.src} />
                </a>
              );
            })}
          </Col>
        </Row>
        <Row className="d-none d-lg-block">
          {sponsorDetails.map((s, i) => {
            return (
              <a key={i}
                 className="d-block mb-2"
                 alt={s.alt}
                 href={s.href}
                 title={s.title}>
                <img className="img-fluid"
                     src={"/images/sponsors/" + s.src} />
              </a>
            );
          })}
        </Row>
      </div>
    );
  }

  return sponsorText;
};

export default sponsors;
