import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../icon.svg';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div style={{
        position: 'relative',
        top: '15px',
        right: '20px',
      }}
      >
        <Link data-testid="shopping-cart-button" to="/cart">
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
