import React, { Component } from "react";
import Iframe from "react-iframe";
import CompTitle from "./CompTitle";
import Row from "react-bootstrap/Row";
export class RecomandationComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Restaurants for you",
      desc:
        "Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.",
    };
  }
  render() {
    return (
      <div>
        <CompTitle title={this.state.title} desc={this.state.desc} />
        <Row className="mt-5">
          <Iframe
            src="http://127.0.0.1:5000/static/carousel.html?user_id=5e95894a564a0055b294ceef"
            frameBorder="0"
            width="100%"
            height="500"
          />
        </Row>
      </div>
    );
  }
}

export default RecomandationComp;
