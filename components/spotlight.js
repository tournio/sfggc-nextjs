import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import styles from './spotlight.module.scss';

const spotlight = () => {
  // const registrationUrl = "https://www.igbo-reg.com/tournaments/big-d-classic-2021";

  const text = (
    <Card.Text>
      After a tough year-plus enduring the pandemic, we're working hard putting together the Golden Gate Classic 2022, in a way that will be both fun and safe for everyone. Keep your eyes peeled!
    </Card.Text>
  );

  // const text = (
  //   <Card.Text>
  //     <p>
  //       Registration is now open! The deadline is August 4, so what are you waiting for?
  //     </p>
  //     <a href="https://www.igbo-reg.com/tournaments/big-d-classic-2021"
  //        className="btn btn-primary">
  //       Register Online
  //       {' '}<svg xmlns="http://www.w3.org/2000/svg"
  //            width="16"
  //            height="16"
  //            fill="currentColor"
  //            className="bi bi-arrow-right aria-hidden"
  //            viewBox="0 0 16 16">
  //         <path fill-rule="evenodd"
  //               d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  //       </svg>
  //     </a>
  //   </Card.Text>
  // );

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
