import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.svg';

class ShoppingCartButton extends React.Component {

  render() {
    return (
      <div data-testid="shopping-cart-button" >
        <Link to="/cart">
          <img src={icon} alt="shopping cart icon" width="50px" />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
