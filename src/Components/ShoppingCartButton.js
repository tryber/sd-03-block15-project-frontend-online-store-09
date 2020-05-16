import React from 'react';
import { Link } from 'react-router-dom';
import icon from './icon.svg';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <div data-testid="shopping-cart-button">
        <Link to="/cart">
          <img
            src={icon}
            style={{ marginLeft: '18px' }}
            alt="shopping cart icon"
            width="30px"
          />
        </Link>
        <p
          style={{ width: '70px', textAlign: 'center' }}
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default ShoppingCartButton;
