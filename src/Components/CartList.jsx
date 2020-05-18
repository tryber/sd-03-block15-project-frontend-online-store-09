import React, { Component } from 'react';
import CartCard from './CartCard';
import MakePurchase from './MakePurchase';

class CartList extends Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    return (
      <div>
        {cartProducts.map((product) => (
          <CartCard  key={product.id} product={product}/>
        ))}
        <MakePurchase />
      </div>
    );
  }
}

export default CartList;
