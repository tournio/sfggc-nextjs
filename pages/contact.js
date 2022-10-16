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
          <Col>
            <p className={'lead mb-3'}>
              Putting on a tournament is a community effort. The Golden Gate Classic wouldn&apos;t be possible without the effort, work, and contributions of all the people on this page.
            </p>
          </Col>
        </Row>
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
                Treasurer
              </Card.Header>
              <Card.Body>
                <img className="img-fluid mx-auto d-block w-100" src="/images/committee/allison.jpg"/>
                <p>
                  <a href="mailto:treasurer@goldengateclassic.org">
                    Allison Laureano
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="text-center mb-2">
              <Card.Header>
                Co-secretary &amp; Technologist
              </Card.Header>
              <Card.Body>
                <img className="img-fluid mx-auto d-block w-100" src="/images/committee/scott.jpg"/>
                <p>
                  <a href="mailto:secretary@goldengateclassic.org">
                    Scott Stebleton
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="text-center mb-2">
              <Card.Header>
                Scratch Master &amp; Co-secretary
              </Card.Header>
              <Card.Body>
                <img className="img-fluid mx-auto d-block w-100" src="/images/committee/duane.jpg"/>
                <p>
                  <a href={'mailto:duane300@hotmail.com'}>
                    Duane Flohra
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="text-center mb-2">
              <Card.Header>
                Committee &amp; Volunteers
              </Card.Header>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Vince Wilson
                </li>
                <li className="list-group-item">
                  Glenn Normandin
                </li>
                <li className="list-group-item">
                  Robert Hughes
                </li>
                <li className="list-group-item">
                  Cathy Patterson
                </li>
                <li className="list-group-item">
                  R.H. Ryan
                </li>
                <li className="list-group-item">
                  Stephen Ingram
                </li>
                <li className="list-group-item">
                  Corey Lindabury
                </li>
                <li className="list-group-item">
                  Patrick O&apos;Connor
                </li>
                <li className="list-group-item">
                  Mark Bertelsen
                </li>
                <li className="list-group-item">
                  Saman Oun
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
