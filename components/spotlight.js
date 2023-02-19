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
            We hope everyone is enjoying themselves this weekend! Oh yeah, and bowling well. ;-)
          </Card.Text>
          <Card.Link href={'/results/2023/scratch_masters_qualifiers.pdf'}>
            Scratch Masters qualifiers
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
