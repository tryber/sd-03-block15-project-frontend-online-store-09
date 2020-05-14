import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export class Product extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div >
        <div style={{ width: '18rem' }} data-testid="product">
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
          />
          <div>
            <h5>{title}</h5>
            <p>
              R$
              {price}
            </p>
              Detalhes
          </div>
        </div>
      </div>
    );
  }
}

export default Product;