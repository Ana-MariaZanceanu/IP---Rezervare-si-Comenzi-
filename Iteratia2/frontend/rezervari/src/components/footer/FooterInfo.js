import React, { Component } from "react";

export class FooterInfo extends Component {
  state = {
    links: [
      {
        id: 1,
        title: "About",
        link: "index.html"
      },
      {
        id: 2,
        title: "Restaurants",
        link: "index.html"
      },
      {
        id: 3,
        title: "Order online",
        link: "index.html"
      }
    ]
  };
  render() {
    return (
      <div className="footer_info">
        <h3>Informations</h3>
        {this.state.links.map(link => (
          <div key={link.id}>
            <a href={link.link}>{link.title}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default FooterInfo;
