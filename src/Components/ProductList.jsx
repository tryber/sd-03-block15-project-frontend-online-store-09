import React, { Component } from 'react';
import Product from './Product';
import './ProductList.css';

export class ProductList extends Component {
  render() {
    const { products } = this.props;

    if (products.results) {
      if (products.results.length === 0) {
        return <p>Nenhum Produto foi encontrado</p>;
      }
      return (
        <div className="display-products">
          {products.results.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      );
    }
    return null;
  }
}

export default ProductList;
