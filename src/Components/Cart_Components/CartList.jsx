import React, { Component } from 'react';
import CartCard from './CartCard';
import MakePurchase from '../Checkout/MakePurchase';
import '../Product_Components/ProductList.css';

class CartList extends Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    return (
      <div>
        <MakePurchase />
        <div className="display-products">
          {cartProducts.map((item) => (
            <CartCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default CartList;
