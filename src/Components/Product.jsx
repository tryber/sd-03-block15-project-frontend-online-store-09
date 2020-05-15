import React, { Component } from 'react';
import ListDetails from './LIstDetails';
import ShoppingCart from './ShoppingLink';

export class Product extends Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div className="product">
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
            <ListDetails
              value={{
                title,
                price,
                thumbnail,
              }}
            />
            <ShoppingCart
              value={{
                title,
                price,
                thumbnail,
              }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
