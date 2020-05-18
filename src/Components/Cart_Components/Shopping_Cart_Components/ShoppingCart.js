import React from 'react';
import CartList from '../CartList';

class ShoppingCart extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        {cartItems === null
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : <CartList />}
      </div>
    );
  }
}

export default ShoppingCart;
