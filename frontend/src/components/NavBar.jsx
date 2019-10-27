import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Guide</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/reference">
            <NavItem eventKey={1}>Reference</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar;