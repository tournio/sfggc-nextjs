import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Layout from "../components/layout";

import styles from './contact.module.scss';

const contact = () => {
  return (
    <Layout>
      <div className={styles.Contact}>
        <h1 className="display-4">
          Tournament Contacts
        </h1>
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={8} xl={6}>
            <Card className="text-center mb-2">
              <Card.Header>
                Co-Director
              </Card.Header>
              <Card.Body>
                <p>
                  <a href="mailto:directors@bigdclassic.com">
                    Randall Buda
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={8} xl={6}>
            <Card className="text-center mb-2">
              <Card.Header>
                Co-Director
              </Card.Header>
              <Card.Body>
                <p>
                  <a href="mailto:directors@bigdclassic.com">
                    José Aguilar
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={8} xl={6}>
            <Card className="text-center">
              <Card.Header>
                Technologist
              </Card.Header>
              <Card.Body>
                <p>
                  <a href="mailto:website@bigdclassic.com">
                    Scott Stebleton
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default contact;
