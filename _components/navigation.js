import React from 'react';
import {Navbar, NavbarBrand, Nav, NavLink, NavDropdown} from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import styles from './navigation.module.scss';

const navigation = ({active}) => {
  return (
    <Navbar bg="light" expand="lg" className={styles.Navbar}>
      <NavbarBrand href="/" className={styles.Brand}>
        SFGGC
      </NavbarBrand>
      <NavbarToggle aria-controls="navbarText" className={styles.Toggler} />
      <NavbarCollapse id="navbarText">
        <Nav className="me-auto">
          {/*<NavLink href="https://www.tourn.io/tournaments/sf-golden-gate-classic-2023">*/}
          {/*  Register*/}
          {/*</NavLink>*/}
          <NavLink href="/schedule">
            Schedule
          </NavLink>
          <NavLink href="/center">
            Bowling Center
          </NavLink>
          <NavLink href="/sf">
            San Francisco
          </NavLink>
          <NavLink href="/rules">
            Rules
          </NavLink>
          <NavLink href="/contact">
            Contact
          </NavLink>
          <NavLink href="/results">
            Results
          </NavLink>
          <NavLink href="/links">
            Links
          </NavLink>

          {/* We can add more in a dropdown here if need be */}
          {/*<NavDropdown id="navbar-dropdown" title="More">*/}
          {/*  <NavDropdown.Item href="/rules">*/}
          {/*    Rules*/}
          {/*  </NavDropdown.Item>*/}
          {/*  <NavDropdown.Item href="/contact">*/}
          {/*    Contact*/}
          {/*  </NavDropdown.Item>*/}
          {/*</NavDropdown>*/}
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default navigation;
