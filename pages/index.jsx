import {Jumbotron, Row, Card, Col} from 'react-bootstrap'

import Layout from '../components/layout';
import Spotlight from '../components/spotlight';

import styles from './index.module.scss';

const index = () => {
  const tournamentDates = 'February 2023';

  const jumbotronClasses = ['d-flex', 'flex-column-reverse', 'align-items-end'];
  jumbotronClasses.push(styles.JumbotronImage);

  return (
    <Layout home={true}>

      <Jumbotron className={jumbotronClasses.join(' ')}>
        <h1 className="display-1">
          <span className={styles.Title}>
            SFGGC
          </span>
          {/*<span className={styles.Year}>*/}
          {/*  2023*/}
          {/*</span>*/}
        </h1>
      </Jumbotron>

      <Row>
        {/*<Col xs={12} md={8} lg={4}>*/}
        {/*  <Card>*/}
        {/*    <Card.Header>*/}
        {/*      <Card.Title>*/}
        {/*        /!*<h4>*!/*/}
        {/*          {tournamentDates}*/}
        {/*        /!*</h4>*!/*/}
        {/*      </Card.Title>*/}
        {/*      <Card.Subtitle className="text-muted">*/}
        {/*        San Francisco, CA*/}
        {/*      </Card.Subtitle>*/}
        {/*    </Card.Header>*/}
        {/*    <Card.Body>*/}
        {/*      <div className="d-lg-none">*/}
        {/*        <img className="float-right img-fluid col-6 p-0"*/}
        {/*          src="/images/logo.jpg"*/}
        {/*          alt="Golden Gate Classic logo"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <Card.Text>*/}
        {/*        Leave your heart in San Francisco! From wineries to redwood forests, wilderness to cosmopolitan life, bowling to bouldering, the San Francisco Bay Area has something for everyone. (Except, perhaps, abundant sunshine.)*/}
        {/*      </Card.Text>*/}
        {/*      <Card.Text>*/}
        {/*        Join us in San Francisco as we showcase the best of the Bay Area.*/}
        {/*      </Card.Text>*/}
        {/*    </Card.Body>*/}
        {/*  </Card>*/}
        {/*</Col>*/}

        <Col lg={4} className="d-none d-lg-block">
          <img className="img-fluid"
               src="/images/logo.jpg"
               alt="Golden Gate Classic logo"
          />
        </Col>

        <Spotlight />
      </Row>

    </Layout>
  )
}

export default index;
