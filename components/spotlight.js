import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import styles from './spotlight.module.scss';

const spotlight = () => {
  // const registrationUrl = "https://www.igbo-reg.com/tournaments/golden-gate-classic-2023";

  // const text = (
  //   <Card.Text>
  //     After a tough year-plus enduring the pandemic, we're working hard putting together the Golden Gate Classic 2022, in a way that will be both fun and safe for everyone. Keep your eyes peeled!
  //   </Card.Text>
  // );

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
          {/*{text}*/}
          <Card.Text>
            The San Francisco Golden Gate Classic committee has decided not to hold a tournament in February 2022.  We know it's been a tough year for all bowlers, leagues and tournaments. We felt we could not present the best tournament possible and decided we would re-group and coming back strong in 2023!
          </Card.Text>
          <Card.Text>
            We appreciate the continuing support of our sponsors, Bud Light &amp;{' '}
            <a href="http://www.lookoutsf.com/">
              The Lookout
            </a>, and the{' '}
            <a href="http://psdic.org">
              Palm Springs Desert Invitational Classic (PSDIC)
            </a>
            {' '}for allowing us to sell 50/50 raffle tickets. We especially want to thank you – our bowlers – who support our tournament each year.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default spotlight;
