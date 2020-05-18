import React from 'react';
import CartList from './CartList';

class ShoppingCart extends React.Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    return (
      <div>
        {cartProducts === null
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : <CartList />}
      </div>
    );
  }
}

export default ShoppingCart;
