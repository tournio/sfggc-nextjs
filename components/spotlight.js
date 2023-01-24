import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import styles from './spotlight.module.scss';

const spotlight = () => {
  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Header bg="light">
          <Card.Title className={styles.Title}>
            Spotlight
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Not long to go now! Registration is still open, so be sure to reserve your spot!
          </Card.Text>
          <Card.Link href={'https://www.tourn.io/tournaments/sf-golden-gate-classic-2023'}>
            Register online
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
