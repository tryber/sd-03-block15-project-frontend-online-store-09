import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.svg';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button"to="/cart">
          <img
            src={icon}
            style={{ marginLeft: '18px' }}
            alt="shopping cart icon"
            width="30px"
          />
        </Link>
      </div>
    );
  }
}

export default ShoppingCartButton;
