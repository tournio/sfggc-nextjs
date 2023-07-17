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
            That&apos;s a wrap! The tournament committee wants to extend a huge thank-you to everyone who came to bowl,
            including those who traveled from afar to join us. And an especially big thank-you to all our volunteers.
            We couldn&apos;t have put this tournament on without you!
          </Card.Text>
          <Card.Text>
            {/*Results will be posted here as soon as they're available.*/}
            <a href={'/results'}>
              Results are up!
            </a>
          </Card.Text>
          <Card.Text>
            See you next year!
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
