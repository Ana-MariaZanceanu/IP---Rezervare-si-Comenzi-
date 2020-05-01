import React, { Component } from "react";
import RestaurantCard from "./RestaurantCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import res1 from "./../../resources/img/restaurant.jpg";
import res2 from "./../../resources/img/res2.jpeg";
import res3 from "./../../resources/img/res3.jpeg";
import res4 from "./../../resources/img/res4.jpeg";
import res5 from "./../../resources/img/res5.jpeg";
import res6 from "./../../resources/img/res6.jpeg";

export class ChooseUsRestaurants extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center mt-5">
            <Col md>
              <RestaurantCard title="First title" img={res1} />
            </Col>
            <Col md>
              <RestaurantCard title="Second title" img={res2} />
            </Col>
            <Col md>
              <RestaurantCard title="Third title" img={res3} />
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-5">
            <Col md>
              <RestaurantCard title="First title" img={res4} />
            </Col>
            <Col md>
              <RestaurantCard title="Second title" img={res5} />
            </Col>
            <Col md>
              <RestaurantCard title="Third title" img={res6} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ChooseUsRestaurants;
