import React, { Component } from 'react';
import CartCard from './CartCard';
import MakePurchase from './MakePurchase';

class CartList extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        {cartItems.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
        <MakePurchase />
      </div>
    );
  }
}

export default CartList;
