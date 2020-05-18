import React, { Component } from 'react';
import ListDetails from '../List_Details/LIstDetails';
import addToCart from '../../services/addToCard';
import './ProductList.css';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.addToCart1 = this.addToCart1.bind(this);
  }

  addToCart1() {
    const { product } = this.props;
    addToCart(product);
  }

  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div className="product">
        <div data-testid="product">
          <img
            className="product-image"
            src={thumbnail}
            alt={`Foto de ${title}`}
          />
          <div className="line" />
          <h5>{title}</h5>
          <p className="priceStyle">
            R$
            {' '}
            {price}
          </p>
          <ListDetails value={this.props} />
          <button
            type="button"
            className="addToCart"
            data-testid="product-add-to-cart"
            onClick={this.addToCart1}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
