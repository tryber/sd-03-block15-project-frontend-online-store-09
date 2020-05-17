import React, { Component } from 'react';
import ListDetails from './LIstDetails';
import './ProductList.css';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product } = this.props;
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems === null) {
      product.quantity = 1;
      return localStorage.setItem('cartItems', JSON.stringify([{ ...product }]));
    }
    const itemRepetido = cartItems.find((item) => item.id === product.id);
    if (itemRepetido) {
      const indexOfItemInCart = cartItems.indexOf(itemRepetido);
      cartItems[indexOfItemInCart].quantity += 1;
      return localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    product.quantity = 1;
    return localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
  }

  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div className="product" data-testid="product">
        <img
          className="product-image"
          src={thumbnail}
          alt={`Foto de ${title}`}
        />
        <div className="line" />
        <h5>{title}</h5>
        <p className="priceStyle">R$ {price}</p>
        <ListDetails value={{ title, price, thumbnail }} />
        <button
          className="addToCartStyle"
          data-testid="product-add-to-cart"
          onClick={this.addToCart}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default Product;
