import React, { Component } from 'react';
import ListDetails from '../List_Details/LIstDetails';
import addToCart from '../../services/addToCard';
import './ProductList.css';
import veiculo from '../../Components/veiculo.svg';

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { freeShipping: this.props.product.shipping.free_shipping };
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
  }

  addToLocalStorage() {
    const { product } = this.props;
    addToCart(product);
  }

  renderFreeShippingIcon() {
    return (
      this.state.freeShipping &&
      <img
        className="freeShipping"
        data-testid="free-shipping"
        src={veiculo} alt="Ícone frete grátis" width="15%"
      />
    );
  }
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div className="product">
        {this.renderFreeShippingIcon()}
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
        </div>
        <ListDetails value={this.props} />
        <button
          type="button"
          className="addToCart"
          data-testid="product-add-to-cart"
          onClick={this.addToLocalStorage}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default Product;
