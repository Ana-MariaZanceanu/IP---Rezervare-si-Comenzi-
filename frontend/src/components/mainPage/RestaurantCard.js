import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export class RestaurantCard extends Component {
  render() {
    const { title, img } = this.props;
    return (
      <div>
        <Card style={styles.card} className="animated fadeInUp">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title style={styles.title}>{title}</Card.Title>
            <Card.Text style={styles.desc}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="float-right restaurant-card-button" style={styles.button}>
              See more
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const styles = {
  card: {
    border: "none",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  title: {
    fontFamily: "Pacifico",
  },
  desc: {
    fonFamily: "Noto Sans KR",
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#a71d31",
    border: "none",
  },
};

export default RestaurantCard;
