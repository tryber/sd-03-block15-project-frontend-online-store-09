import React, { Component } from 'react';
import ListDetails from './LIstDetails';
// import {Link} from 'react-router-dom'

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
    }
  }
  addToLocalStorage(product) {
    const storageJson = JSON.stringify(product);
    localStorage.setItem(`${product.id}`, storageJson);
  }
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div>
        <div style={{ width: '18rem' }} data-testid="product">
          <img
            src={thumbnail}
            alt={`Foto de ${title}`}
          />
          <div>
            <h5 className="product">{title}</h5>
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
          </div>
          <button data-testid="product-add-to-cart" onClick={() => this.addToLocalStorage(this.props.product)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
