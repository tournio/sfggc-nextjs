import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navigation from './navigation';
import SiteHeader from './siteHeader';
import SiteFooter from './siteFooter';
import Sponsors from './sponsors';

const layout = ({children, home}) => {
  let mainContent = '';
  if (home) {
    mainContent = (
      <Container className="lg-container">
        <main>
          {children}
        </main>
        <Sponsors home={true}/>
      </Container>
    );
  } else {
    mainContent = (
      <Container className="lg-container">
        <Row>
          <Col xs={12} lg={10}>
            <main>
              {children}
            </main>
          </Col>
          <Col xs={12} lg={2}>
            <Sponsors home={false} />
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Container className="lg-container">
        <SiteHeader/>
        <header>
          <Navigation/>
        </header>
      </Container>

      {mainContent}

      <Container className="lg-container">
        <SiteFooter/>
      </Container>
    </>
  )
    ;
}

export default layout;
