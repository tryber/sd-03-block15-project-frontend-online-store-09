import React from 'react';
import './DetailsProduct.css';
import ShoppingCartButton from './ShoppingCartButton';
import addToCart from '../services/addToCard';

class DetailsProduct extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart1 = this.addToCart1.bind(this);
  }
  addToCart1() {
    const { product } = this.props.location.state.value;
    addToCart(product);
  }
  render() {
    const { product: { title, price, thumbnail } } = this.props.location.state.value;
    return (
      <div data-testid="product-detail-name">
        <div style={{ float: 'right', clear: 'both', marginBottom: '10px' }}>
          <ShoppingCartButton />
        </div>
        <div className="box-product">
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} width="50%" />
          <h2>Detalhes</h2>
          <ul>
            <li>{title}</li>
            <li>{`Preço: R$ ${price.toFixed(2)}`}</li>
          </ul>
          <div style={{ margin: '10px' }}>
            <textarea
              placeholder="Digite sua avaliação"
              data-testid="product-detail-evaluation"
              rows="10"
              cols="48"
            />
          </div>
          <button data-testid="product-detail-add-to-cart" onClick={this.addToCart1}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}
export default DetailsProduct;
