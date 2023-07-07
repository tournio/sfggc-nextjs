import React from 'react';
import {Row, Col, Card, ListGroup, Button} from "react-bootstrap";

import Layout from "../_components/layout";

import styles from './results.module.scss';

const results = () => {
  const available = [
    { id: 'team', name: 'Team Event' },
    { id: 'doubles', name: 'Doubles Event' },
    { id: 'singles', name: 'Singles Event' },
    { id: 'all_events', name: 'All Events' },
    { id: 'optional_scratch_game', name: 'Optional Scratch - Game' },
    { id: 'optional_scratch_series', name: 'Optional Scratch - Series' },
    { id: 'scratch_masters_qualifiers', name: 'Scratch Masters Qualifiers' },
    { id: 'all_bowlers', name: 'All Bowlers (alphabetical)' },
  ];

  return (
    <Layout>
      <div className={styles.Results}>
        <h1 className="display-4">
          Tournament Results
        </h1>

        {/*<h5 className="text-muted">*/}
        {/*  Results will be posted here when they're available.*/}
        {/*</h5>*/}

        <h5>
          2023 Tournament Results
        </h5>

        <Row>
          <Col lg={6}>
            <Card className='mb-2'>
              <ListGroup variant='flush'>
                { available.map((result, i) => {
                  return (
                    <ListGroup.Item key={i}>
                      <Button variant='outline-secondary'
                              href={`/results/${result.id}.pdf`}
                              className={'me-2'}
                              title='Download PDF'>
                        <i className="bi bi-file-pdf-fill" aria-hidden={true}></i>
                      </Button>
                      <a href={`/results/2023/${result.id}.pdf`} className={styles.LinkText}>
                        {`${result.name}`}
                      </a>
                    </ListGroup.Item>
                  );
                }) }
              </ListGroup>
            </Card>
          </Col>
        </Row>

      </div>
    </Layout>
  );
};

export default results;
