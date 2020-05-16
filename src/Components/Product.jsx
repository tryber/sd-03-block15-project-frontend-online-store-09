import React, { Component } from 'react';
import ListDetails from './LIstDetails';

export class Product extends Component {
  addToLocalStorage() {
    const storageJson = JSON.stringify(this.props.product);
    localStorage.setItem(`${this.props.product.id}`, storageJson);
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
          <button
            data-testid="product-add-to-cart"
            onClick={() => this.addToLocalStorage(this.props.product)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
