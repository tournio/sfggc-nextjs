import React from 'react';

import Layout from "../_components/layout";

import styles from './links.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const links = () => {
  const interest = [
    {
      short: 'IGBO',
      long: 'International Gay Bowling Association',
      url: 'http://www.igbo.org',
    },
    {
      short: 'USBC',
      long: 'United States Bowling Congree',
      url: 'https://www.bowl.com',
    },
    {
      short: 'avg',
      long: 'Find a USBC book average',
      url: 'http://bowl.com/',
    },
  ];
  const interestText = interest.map((league, i) => {
    return (
      <Col xs={6} md={4} key={i} className={styles.LeagueCard}>
        <Card>
          <Card.Header className={styles.CardHeader}>
            <a href={league.url}>
              {league.short}
            </a>
          </Card.Header>
          <Card.Body className={styles.CardBody}>
            <a href={league.url}>
              {league.long}
            </a>
          </Card.Body>
        </Card>
      </Col>
    );
    });

  const tournaments = [
    {
      headline:  'DC',
      long: 'IGBO Mid-year 2022',
      url: 'http://igbomy2022.org/',
      location: 'Washington, DC',
    },
    {
      headline:  'SEA',
      long: 'IGBO Annual 2023',
      url: 'http://igbo2023.org/',
      location: 'Seattle, WA',
    },
    {
      headline:  'SVIT',
      long: 'Silicon Valley International Tournament',
      url: 'http://www.svitbowl.com/',
      location: 'San Jose, CA',
    },
    {
      headline: 'CSC',
      long: 'California Spring Classic',
      url: 'https://www.californiaspringclassic.org/',
      location: 'Irvine, CA',
    },
    {
      headline:  'PSDIC',
      long: 'Palm Springs Desert Invitational Classic',
      url: 'http://psdic.org',
      location: 'Palm Springs, CA',
    },
    {
      headline:  'SEC',
      long: 'Seattle Espresso Cup',
      url: 'http://www.espressocup.org/',
      location: 'Seattle, WA',
    },
    {
      headline:  'BIGD',
      long: 'Big D Classic',
      url: 'http://www.bigdclassic.com',
      location: 'Dallas, TX',
    },
    {
      headline:  'SMC',
      long: 'Show Me Classic',
      url: 'http://showmeclassic.com',
      location: 'St. Louis, MO',
    },
    {
      headline:  'MAKIT',
      long: 'Missouri and Kansas Invitational',
      url: 'http://www.makitkc.org',
      location: 'Kansas City, KS',
    },
    {
      headline:  'DIGLIT',
      long: 'Denver International Gay and Lesbian Invitational',
      url: 'http://www.bowldiglit.org/',
      location: 'Denver, CO',
    },
    {
      headline:  'TXSS',
      long: 'Texas Super Slam',
      url: 'https://www.txsuperslam.com/',
      location: 'Austin, TX',
    },
    {
      headline:  'TART',
      long: 'The Albuquerque Roadrunner Tournament',
      url: 'http://www.beepbeepbowl.org/',
      location: 'Albuquerque, NM',
    },
  ];
  const tournamentsText = tournaments.map((t, i) => {
    return (
      <Col xs={6} sm={4} key={i} className={styles.TournamentCard}>
        <Card>
          <Card.Header className={styles.CardHeader}>
            <a href={t.url}>
              {t.headline}
            </a>
          </Card.Header>
          <Card.Body className={styles.CardBody}>
            <a href={t.url}>
              {t.long}
            </a>
            <small className="line text-muted">
              {t.location}
            </small>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Layout>
      <div className={styles.Links}>
        <h1 className="display-4">
          Links of Interest
        </h1>

        <Row className={styles.LeaguesRow}>
          {interestText}
        </Row>

        <hr />

        <h3>
          Other IGBO Tournaments
        </h3>

        <Row>
          {tournamentsText}
        </Row>

      </div>
    </Layout>
  );
};

export default links;
