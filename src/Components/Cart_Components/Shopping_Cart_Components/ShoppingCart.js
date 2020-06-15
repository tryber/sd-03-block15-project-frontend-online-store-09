import React from 'react';
import CartProducts from '../CartProducts';

class ShoppingCart extends React.Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    return (
      <div>
        {cartProducts === null
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : <CartProducts />}
      </div>
    );
  }
}

export default ShoppingCart;
