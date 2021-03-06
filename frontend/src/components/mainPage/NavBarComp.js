import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShoppingCartModal from "../shoppingCart/ShoppingCartModal";
import WishlistModal from "../wishlist/WishlistModal";
import axios from "axios";

const urlGetCart = "http://localhost:3000/api/v1/cart/session";
const getUrlWishlist = "http://localhost:3000/api/v1/favorites/";

export class NavBarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      products: [],
      wishedProducts: [],
    };
  }

  getCart = async () => {
    let products = [];
    await axios({
      method: "get",
      url: urlGetCart,
      withCredentials: true,
    })
      .then((response) => {
        products = response.data.data.items;
      })
      .catch((error) => {
        console.log(error);
      });
    return products;
  };

  getWishlist = async () => {
    let products = [];
    await axios({
      method: "get",
      url: getUrlWishlist + "5eb16fdf4afbf654966cb68d",
    })
      .then((response) => {
        
        products = response.data.data.favorites[0].items;
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
    return products;
  };

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
                  <Nav.Link
                    style={styles.nav}
                    onClick={() => {
                      this.setState({ modalShow: true });
                      this.getCart().then((result) =>
                        this.setState({ products: result })
                      );
                    }}
                  >
                    <Link to={"/cart"} className="iconCart">
                      <FaShoppingCart />
                    </Link>
                  </Nav.Link>
                  <Nav.Link
                    style={styles.nav}
                    onClick={() => {
                      this.setState({ modalShow: true });
                      this.getWishlist().then((result) =>
                        this.setState({ wishedProducts: result })
                      );
                    }}
                  >
                    <Link to="/" className="iconHeart">
                      <FaHeart />
                    </Link>
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

          <Switch>
            <Route path={"/cart"}>
              <ShoppingCartModal
                show={this.state.modalShow}
                onHide={() => {
                  this.setState({ modalShow: false });
                }}
                products={this.state.products}
              />
            </Route>

            <Route path={"/"}>
              <WishlistModal
                show={this.state.modalShow}
                onHide={() => {
                  this.setState({ modalShow: false });
                }}
                products={this.state.wishedProducts}
              />
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
