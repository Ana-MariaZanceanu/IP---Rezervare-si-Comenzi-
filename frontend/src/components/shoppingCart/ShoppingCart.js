import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import './ShoppingCart.css';
const TAX_RATE = 0.06;
const TAX_TEXT = '6% sales tax'

function dollarsFromCents(n) {
    return '$' + parseFloat(n / 100).toFixed(2)
  }

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {
        housePasta: 5,
      },
    };
    this.emptyCart = this.emptyCart.bind(this);

  }
  addProduct(productName) {
    return (e) => {
      e.preventDefault();
      this.setState((prevState) => {
        prevState.cart[productName]++;
        return prevState;
      });
    };
  }
  zeroProduct(productName) {
    return (e) => {
      e.preventDefault();
      this.setState((prevState) => {
        prevState.cart[productName] = 0;
        return prevState;
      });
    };
  }
  emptyCart(e) {
    e.preventDefault();
    this.setState((prevState) => {
      prevState.cart = {
        housePasta: 0,
      };
      return prevState;
    });
  }
  cartChange(productName) {
    return (quantity) => {
      this.setState((prevState) => {
        prevState.cart[productName] = quantity;
        return prevState;
      });
    };
  }

  render() {
    let total = 0;
    let cartClasses = 'cart';
    if (total) {
      cartClasses += ' cart-shown';
    } else {
      cartClasses += ' cart-hidden';
    }
    const {products} = this.props;
    console.log(products)
    let tax = 0;
    let cartProductRows = products.map((p, i) => {
      let quantity = p.item.quantity;
      console.log("quantity " + quantity)
      if (!quantity) {
        return null;
      }
      let name = p.item.product;
      let price = p.item.price;
      total += price * quantity;
      tax = Math.ceil(total * TAX_RATE);
      return (
          <tr key={i}>
            <td> {name} </td>
            <td>
              <NumericInput
                  min={0}
                  value={quantity}
                  onChange={this.cartChange(name)}
              />
              &nbsp;
              <button onClick={this.zeroProduct(name)}>x</button>
            </td>
            <td className="currency">{price}</td>
          </tr>
      );
    });
    return (
      <div className={"cartClasses"}>
          <table>
            <thead>
              <tr>
                <th colSpan="2">product</th>
                <th>quantity</th>
                <th>subtotal</th>
              </tr>
            </thead>
            <tbody>{cartProductRows}</tbody>
            <tfoot>
              <tr key="subtotal">
                <td colSpan="2"></td>
                <td>
                  <strong>subtotal</strong>
                </td>
                <td className="currency">{total}</td>
              </tr>
              <tr key="tax">
                <td colSpan="2"></td>
                <td>
                  <strong>{TAX_TEXT}</strong>
                </td>
                <td className="currency">{tax}</td>
              </tr>
              <tr key="total">
                <td colSpan="2"></td>
                <td>
                  <strong>total</strong>
                </td>
                <td className="currency">{total + tax}</td>
              </tr>
              <tr className="cart-actions" key="cart-actions">
                <td colSpan="2"></td>
                <td>
                  <a
                    className="cart-empty"
                    href="#empty-cart"
                    onClick={this.emptyCart}
                  >
                    empty cart
                  </a>
                </td>
                <td>
                  <button className="cart-pay">pay now</button>
                </td>
              </tr>
            </tfoot>
          </table>
      </div>
    );
  }
}

export default ShoppingCart;
