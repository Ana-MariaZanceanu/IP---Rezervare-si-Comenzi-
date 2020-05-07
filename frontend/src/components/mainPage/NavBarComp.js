import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class NavBarComp extends Component {
  render() {
    return (
      <div>
        <Navbar className="bg-navbar" variant="dark" expand="md" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto" />
              <Nav>
                <Nav.Link style={styles.nav} href="#home">
                  Home
                </Nav.Link>
                <Nav.Link style={styles.nav} href="#link">
                  About
                </Nav.Link>
                <Nav.Link style={styles.nav} href="#link">
                  Restaurants
                </Nav.Link>
                <Nav.Link style={styles.nav} href="#link">
                  Specials
                </Nav.Link>
                <Nav.Link style={styles.nav} href="#link">
                  Contact
                </Nav.Link>
              </Nav>
              <Form inline>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const styles = {
  nav: {
    color: "#f7e7d9",
    marginRight: "5px",
  },
};

export default NavBarComp;
