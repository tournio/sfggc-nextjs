import {Row, Card, Col} from 'react-bootstrap'

import Layout from '../components/layout';
import Spotlight from '../components/spotlight';

import styles from './index.module.scss';
import React from "react";

const index = () => {
  const tournamentDates = 'February 17-19, 2023';
  const year = 2023;
  const tournamentName = 'SFGGC';
  const city = 'San Francisco, CA';
  const logoPath = '/images/logo.jpg';
  const logoAltText = 'Golden Gate Classic logo';

  const jumbotronClasses = ['d-flex', 'flex-column-reverse', 'align-items-end', 'px-2'];
  jumbotronClasses.push(styles.JumbotronImage);

  return (
    <Layout home={true}>

      <div className={jumbotronClasses.join(' ')}>
        <h1 className="display-1">
          <span className={styles.Title}>
            {tournamentName}
          </span>
          <span className={styles.Year}>
            {year}
          </span>
        </h1>
      </div>

      <Row>
        <Col xs={12} md={8} lg={4}>
          <Card className={'mb-2'}>
            <Card.Header>
              <Card.Title>
                {/*<h4>*/}
                  {tournamentDates}
                {/*</h4>*/}
              </Card.Title>
              <Card.Subtitle className="text-muted">
                San Francisco, CA
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <div className="d-lg-none">
                <img className="float-end img-fluid col-6 p-0"
                  src="/images/logo.jpg"
                  alt="Golden Gate Classic logo"
                />
              </div>
              <Card.Text>
                Leave your heart in San Francisco! From wineries to redwood forests, wilderness to cosmopolitan life, bowling to bouldering, the San Francisco Bay Area has something for everyone. (Except, perhaps, abundant sunshine.)
              </Card.Text>
              <Card.Text>
                Join us in San Francisco as we showcase the best of the Bay Area.
              </Card.Text>
              <Card.Text>
                <a href="https://www.tourn.io/tournaments/sf-golden-gate-classic-2023"
                   className="btn btn-primary">
                  Register Online
                  <i className={'bi-arrow-right ps-2'} aria-hidden={true}/>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} className="d-none d-lg-block">
          <img className="img-fluid"
               src={logoPath}
               alt={logoAltText}
          />
        </Col>

        <Spotlight />
      </Row>

    </Layout>
  )
}

export default index;
