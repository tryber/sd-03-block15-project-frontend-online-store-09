import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.svg';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            src={icon}
            alt="shopping cart icon"
            width="30px"
          />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
