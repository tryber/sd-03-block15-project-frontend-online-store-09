import React, { Component } from 'react';
import CartCard from './CartCard';
import MakePurchase from './MakePurchase';
import './ProductList.css';

class CartList extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div>
        <MakePurchase />
        <div className="display-products">
          {cartItems.map((item) => (
            <CartCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default CartList;
