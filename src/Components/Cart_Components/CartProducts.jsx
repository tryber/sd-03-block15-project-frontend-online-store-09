import React, { Component } from 'react';
import CartCard from './CartCard';
import MakePurchase from '../Checkout/MakePurchase';
import '../Product_Components/ProductList.css';

class CartProducts extends Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    return (
      <div>
        <MakePurchase />
        <div className="display-products">
          {cartProducts.map((product) => (
            <CartCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default CartProducts;
