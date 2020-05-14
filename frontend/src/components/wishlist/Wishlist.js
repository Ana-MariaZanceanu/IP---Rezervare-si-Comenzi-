import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Wishlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { products } = this.props;
    if (products != null) {
      let cartProductRows = products.map((p, i) => {
        let name = p.item.product;
        let price = p.item.price;

        return (
          <tr key={i}>
            <td>
              <Button onClick={this.zeroProduct(p)} className="deleteProduct">
                x
              </Button>
            </td>
            <td> {name} </td>
            <td>{price}</td>
            <td>
              <Button>Add to cart</Button>
            </td>
          </tr>
        );
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

        <tbody className="bodyTable"> </tbody>
        <tfoot>
          <Button>clear wishlist</Button>
        </tfoot>
      </table>
    );
  }
}

export default Wishlist;