import React from 'react';

import Layout from "../components/layout";

import styles from './links.module.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const links = () => {
  const leagues = [
    // {
    //   short: 'OLBA',
    //   long: 'Oak Lawn Bowling Association',
    //   url: 'http://www.oaklawnbowling.com',
    // },
    {
      short: 'MBA',
      long: 'Metroplex Bowling Association',
      url: 'https://www.facebook.com/MetroplexBowling/',
    },
    {
      short: 'MRB',
      long: 'Metroplex Rainbow Bowling',
      url: 'https://www.facebook.com/pages/category/Bowling-Alley/Metroplex-Rainbow-Bowling-184099024995/',
    },
    {
      short: 'SC',
      long: 'Sunset Combo',
      url: 'https://www.leaguesecretary.com/bowling-centers/cityview-lanes-fort-worth-texas/bowling-leagues/sunset-combo-2018-19/dashboard/5490',
    },
  ];
  const leaguesText = leagues.map((league, i) => {
    return (
      <Col xs={6} key={i} className={styles.LeagueCard}>
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
      headline:  'NV',
      long: 'IGBO Annual 2021',
      url: 'http://igbo2021.org/',
      location: 'Las Vegas, NV',
    },
    {
      headline:  'CA',
      long: 'IGBO Mid-year 2021',
      url: 'https://igbomy2021.org/',
      location: 'Los Angeles, CA',
    },
    {
      headline:  'TX',
      long: 'Texas Roll-Off Tournament',
      url: 'http://www.texasrolloff.com',
      location: 'Grand Prairie, TX',
    },
    {
      headline:  'TX',
      long: 'Houston Invitational Tournament',
      url: 'http://www.houstoninvite.com',
      location: 'Houston, TX',
    },
    {
      headline:  'TX',
      long: 'Alamo City Tournament',
      url: 'http://www.actbowl.com',
      location: 'San Antonio, TX',
    },
    {
      headline:  'OK',
      long: 'OKClassic',
      url: 'http://www.okclassic.com',
      location: 'Oklahoma City, OK',
    },
    {
      headline:  'OK',
      long: 'JOLT',
      url: 'http://www.jolttulsa.com/',
      location: 'Tulsa, OK',
    },
    {
      headline:  'MO',
      long: 'Show Me Classic',
      url: 'http://showmeclassic.com',
      location: 'St. Louis, MO',
    },
    {
      headline:  'KS',
      long: 'MAKIT-KC',
      url: 'https://www.makitkc.org',
      location: 'Kansas City, KS',
    },
    {
      headline:  'CA',
      long: 'Golden Gate Classic',
      url: 'http://www.goldengateclassic.org',
      location: 'San Francisco, CA',
    },
    {
      headline:  'CA',
      long: 'Palm Springs Desert Invitational Classic',
      url: 'http://psdic.org',
      location: 'Palm Springs, CA',
    },
    {
      headline:  'CO',
      long: 'DIGLIT',
      url: 'http://www.bowldiglit.org/',
      location: 'Denver, CO',
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
        <h3>
          Local IGBO Leagues
        </h3>

        <Row className={styles.LeaguesRow}>
          {leaguesText}
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
