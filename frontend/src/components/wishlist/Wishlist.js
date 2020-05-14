import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const urlApiCourses = "http://localhost:4000/api/courses/";
const getProduct = async (id) => {
  let product = {};
  await axios({
    method: "get",
    url: urlApiCourses + id,
  })
    .then((response) => {
      product = response.data.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
  return product;
};

class Wishlist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let cartProductRows;
    let { products } = this.props;
    if (products != null) {
      cartProductRows = products.map((p, i) => {
        getProduct(p).then((result) => {
          return (
            <tr key={i}>
              <td>
                <Button className="deleteProduct">x</Button>
              </td>
              <td>{result.name}</td>
              <td>{result.price}</td>
              <td>
                <Button>Add to cart</Button>
              </td>
            </tr>
          );
        });
      });
    }

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="bodyTable">{cartProductRows}</tbody>
        <tfoot>
          <Button>clear wishlist</Button>
        </tfoot>
      </table>
    );
  }
}

export default Wishlist;
