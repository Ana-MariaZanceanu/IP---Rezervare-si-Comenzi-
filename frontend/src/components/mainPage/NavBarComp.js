import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {FaShoppingCart} from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShoppingCart from "../shoppingCart/ShoppingCart";

export class NavBarComp extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <Router>
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
                <Nav.Link style={styles.nav}><Link to="/cart"><FaShoppingCart/></Link></Nav.Link>
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

        <Switch>
          <Route path="/cart">
            <ShoppingCart/>
          </Route>
        </Switch>

      </div>
        </Router>
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
