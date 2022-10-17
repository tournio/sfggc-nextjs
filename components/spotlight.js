import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import styles from './spotlight.module.scss';

const spotlight = () => {
  const text = (
    <Card.Text>
      Join us for our next two fundraisers at{' '}
      <a href="http://www.lookoutsf.com/">
        The Lookout
      </a>
      {' '}! We&apos;ll be there all afternoon on October 30 and November 27, selling Jello shots and giving away
      smiles.
    </Card.Text>
  );

  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Header bg="light">
          <Card.Title className={styles.Title}>
            Spotlight
          </Card.Title>
        </Card.Header>
        <Card.Body>
          {text}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
