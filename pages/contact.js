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
          Tournament Committee
        </h1>
        <Row>
          <Col sm={4}>
            <Card className="text-center mb-2">
              <Card.Header>
                Director
              </Card.Header>
              <Card.Body>
                <img className="img-fluid mx-auto d-block w-100" src="/images/committee/richard.jpg"/>
                <p>
                  <a href="mailto:directors@goldengateclassic.org">
                    Richard Perez
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="text-center mb-2">
              <Card.Header>
                Technologist
              </Card.Header>
              <Card.Body>
                <img className="img-fluid mx-auto d-block w-100" src="/images/committee/scott.jpg"/>
                <p>
                  <a href="mailto:website@goldengateclassic.org">
                    Scott Stebleton
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="text-center mb-2">
              <Card.Header>
                Scratch Master
              </Card.Header>
              <Card.Body>
                <img className="img-fluid mx-auto d-block w-100" src="/images/committee/duane.jpg"/>
                <p>
                  Duane Flohra
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="text-center mb-2">
              <Card.Header>
                Committee Members
              </Card.Header>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Glenn Normandin
                </li>
                <li className="list-group-item">
                  Bryan Hoff
                </li>
                <li className="list-group-item">
                  Robert Hughs
                </li>
                <li className="list-group-item">
                  Allison Laureano
                </li>
                <li className="list-group-item">
                  Cathy Patterson
                </li>
                <li className="list-group-item">
                  R.H. Ryan
                </li>
                <li className="list-group-item">
                  Vince Wilson
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default contact;
